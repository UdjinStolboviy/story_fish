import getConfig from "next/config";
const { publicRuntimeConfig } = getConfig();

export const config = () => {
    if (typeof window === "undefined") {
        return {};
    }

    return {
        baseURL:
            (window as any)?._env_?.API_URL || publicRuntimeConfig.API_URL || "/api",
        URL: (window as any)?._env_?.URL || publicRuntimeConfig.URL || "",
    };
};
