import { config } from "@/config";
import { clearUserInfoFromLocalStorage, setupUserInfoToLocalStorage } from "@/utils/utils";
import {
    action,
    computed,
    makeObservable,
    observable,
    runInAction,
} from "mobx";
import { RootStore } from "./RootStore";
import { LoginData, RegistrationData, UserState } from "./TypesApp";


export class UserStore {
    root: RootStore;
    requestState = "fulfilled";
    jwt = '';
    username = '';
    email = '';
    error = '';

    constructor(root: RootStore) {
        this.root = root;
        makeObservable(this, {
            requestState: observable,
            jwt: observable,
            username: observable,
            email: observable,
        });
    }

    setUser(user: UserState) {
        this.jwt = user.jwt;
        this.username = user.user.username;
        this.email = user.user.email;
    }

    getUser() {
        return {
            jwt: this.jwt,
            username: this.username,
            email: this.email,
        };
    }

    createLoginRequest = (
        jwt: string | null,
        loginData: LoginData | undefined
    ) => {

        if (jwt && !loginData) {
            return fetch(`${config().baseURL}/users/me`, {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${jwt}`,
                },
            });
        }
        if (loginData) {
            return fetch(`${config().baseURL}/auth/local`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(loginData),
            });
        }

        throw { error: "Invalid login request" };
    };



    logout = () => {
        this.requestState = "pending";
        this.requestState = "fulfilled";
        this.jwt = "";
        this.username = "";
        this.email = "";
        this.error = '';
    }

    registration = async (registrationData: RegistrationData) => {
        console.log(registrationData, "registrationData ------------", config().baseURL);
        try {

            const response = await fetch(`${config().baseURL}/auth/local/register`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(registrationData),
            });

            const result = await response.json();

            if (response.status < 200 || response.status >= 300) {
                return this.requestState = "rejected";
            }
            setupUserInfoToLocalStorage(result);
            return result;
        } catch (error) {

            return this.requestState = "rejected";

        }
    }


}