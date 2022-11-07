type RequestState = "pending" | "fulfilled" | "rejected";

export interface SerializedError {
    name?: string;
    message?: string;
    stack?: string;
    code?: string;
};

export type UserState = {
    jwt: string;
    username: string;
    email: string;
    requestState?: RequestState;
    error?: SerializedError;
};

export type UserDate = {
    jwt: string;
    user: {
        jwt: string;
        user: {
            id: number;
            username: string;
            email: string;
            provider: string;
            confirmed: boolean;
            blocked: boolean;
        }
    };

};

export type LoginData = {
    identifier: string;
    password: string;
};

export type RegistrationData = {
    username: string;
    email: string;
    password: string;
};

export type UserRegistered = {
    jwt: string;
    user: RegistrationData
};
