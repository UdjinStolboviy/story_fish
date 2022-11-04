import { config } from "../../config";
import {
    IPosts,
    IGetPost,
    IGetVacancies,
    IGetFeedbacks,
    IQuery,
    IGetInstagramPosts,
} from "./types";
import qs from "qs";
import { LoginData } from "@/data-stores/TypesApp";
import { clearUserInfoFromLocalStorage, setupUserInfoToLocalStorage } from "@/utils/utils";

type FetchMethod = "GET" | "POST" | "PATCH" | "PUT" | "DELETE";

interface IFetchHeaders {
    [key: string]: string;
}

const fetchWithTimeout = (
    url: RequestInfo,
    options: RequestInit,
    timeout: number
): Promise<any> => {
    console.log("fetchWithTimeout", url);
    return Promise.race([
        fetch(url, options),
        new Promise((_, reject) =>
            setTimeout(() => reject(new Error("Timeout error")), timeout)
        ),
    ]);
};

export class ApiService {
    public getVacancies(): Promise<IGetVacancies> {
        return this.makeRequest<IGetVacancies>(`${config().URL}/api/jobs`, "GET");
    }

    public getFeedbacks(q?: IQuery): Promise<IGetFeedbacks> {
        const defaultQuery: IQuery = {
            pagination: {
                page: 2,
                pageSize: 3,
            },
            sort: ["publishedAt:desc"],
        };
        const query = q ? qs.stringify(q) : qs.stringify(defaultQuery);
        return this.makeRequest<IGetFeedbacks>(
            `${config().URL}/api/fecks?${query}`,
            "GET"
        );
    }

    public getInstagramPosts(q?: IQuery): Promise<IGetInstagramPosts> {
        return this.makeRequest<IGetInstagramPosts>(
            `${config().baseURL}/inssts`,
            "GET"
        );
    }

    public getPost(id: string): Promise<IGetPost> {
        return this.makeRequest<IGetPost>(
            `${config().baseURL}/posts/${id}?populate=adminior.img,mainImg`,
            "GET"
        );
    }

    public getPosts(limit: number): Promise<IPosts> {
        return this.makeRequest<IPosts>(
            `${config().baseURL
            }/posts?populate=administrator,administrator.img,mainImpagination[limit]=${limit}`,
            "GET"
        );
    }

    public createLoginRequest = (
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

    public login = async (loginData: LoginData) => {

        try {
            const jwt = localStorage.getItem("jwt");
            const response = await this.createLoginRequest(jwt, loginData);
            const data = await response.json();
            if (response.status < 200 || response.status >= 300) {
                console.log('Invalid login request');
                return
            }
            const result = (jwt ? { jwt, user: data } : data)
            setupUserInfoToLocalStorage(result);
            return result;
        } catch (error) {
            clearUserInfoFromLocalStorage();
            console.log("error login", error);
        }
    }

    private async makeRequest<TResponse>(
        url: string,
        method?: FetchMethod,
        requestBody?: object | FormData,
        headerOptions?: object
    ): Promise<TResponse> {
        const body = !(requestBody instanceof FormData)
            ? JSON.stringify(requestBody)
            : requestBody;
        const requestHeaders = headerOptions || {};

        const headers: IFetchHeaders = {
            accept: "application/json",
            ...requestHeaders,
        };

        if (!(requestBody instanceof FormData)) {
            headers["Content-Type"] = "application/json";
        }

        const response = await fetchWithTimeout(
            url,
            {
                method,
                headers,
                body,
            },
            15000
        );

        if (response.ok) {
            const resJson = await response.json();
            return resJson;
        } else {
            throw await response.json();
        }
    }
}
