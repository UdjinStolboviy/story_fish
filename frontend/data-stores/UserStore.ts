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
            error: observable,
        });
    }

    setUser(user: UserState) {
        this.jwt = user.jwt;
        this.username = user.username;
        this.email = user.email;
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

    login = async (loginData: LoginData) => {
        this.requestState = "pending";
        try {
            const jwt = localStorage.getItem("jwt");
            const response = await this.createLoginRequest(jwt, loginData);
            const data = await response.json();

            if (response.status < 200 || response.status >= 300) {
                clearUserInfoFromLocalStorage();
                this.error = 'Invalid login request';
                return
            }
            const result = (jwt ? { jwt, user: data } : data)
            runInAction(() => {
                this.requestState = "fulfilled";
                this.jwt = result.jwt;
                this.username = result?.user?.username;
                this.email = result?.user?.email;
                this.error = '';
            });
            setupUserInfoToLocalStorage(result);
            return result;
        } catch (error) {
            runInAction(() => {
                clearUserInfoFromLocalStorage();
                this.requestState = "rejected";
            });
        }
    }

    logout = async () => {
        this.requestState = "pending";
        try {
            clearUserInfoFromLocalStorage()
            runInAction(() => {
                this.requestState = "fulfilled";
                this.jwt = "";
                this.username = "";
                this.email = "";
                this.error = '';
            });
        } catch (error) {
            runInAction(() => {
                this.requestState = "rejected";

            });
        }
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
            return runInAction(() => {
                this.requestState = "rejected";

            });
        }
    }


}