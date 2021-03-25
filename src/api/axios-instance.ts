import Axios, { AxiosInstance } from "axios";

const baseURL = 'https://swapi.dev/api';

export const getAxiosInstance = (): AxiosInstance => {
    let axiosInstance = Axios.create({ baseURL: baseURL });
    axiosInstance.interceptors.
        response.use(response => response,
            (error) => {
                const { status } = error.response;
                if (status > 399)
                    console.info(`API error status: ${status}`)
            });
    return axiosInstance;
}