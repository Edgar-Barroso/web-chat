import axios, { AxiosError } from "axios";
import Cookies from "js-cookie";

interface AxiosErrorResponse {
    status?: number;
    code?: string;
}
export function setupAPIClient() {
    const cookieToken = Cookies.get("chat.token");
    const api = axios.create({
        baseURL: "http://localhost:3333",
        headers: {
            Authorization: `Bearer ${cookieToken}`,
        },
    });
    

    // api.interceptors.response.use(
    //     (response) => {
    //         return response;
    //     },
    //     async (error: AxiosError<AxiosErrorResponse>) => {
    //         if (
    //             error.response?.status === 401 &&
    //             error?.response.statusText === "Unauthorized"
    //         ) {
    //             try {
    //                 const response = await api.patch("token/refresh");
    //                 const newToken = await response.data.token;
    //                 Cookies.set("chat.token", newToken);
    //                 return Promise.reject({ response, error });
    //             } catch {
    //                 Cookies.remove("chat.token");
    //             }
    //         }

    //         return Promise.reject(error);
    //     }
    // );

    return api;
}