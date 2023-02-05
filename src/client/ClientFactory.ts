import Request from "~/client/Request";
import axios, {AxiosPromise, AxiosRequestConfig} from "axios";
import {baseUrl} from "~/config/config";

export default function handle(request: Request): AxiosPromise<unknown> {
    let config: AxiosRequestConfig = {
        url: request.url,
        method: request.method,
        baseURL: baseUrl(),
        // baseURL?: string;
        // headers?: AxiosRequestHeaders;
        // params?: any;
        // data?: D;
        // withCredentials?: boolean;

    }
    let data = request.data;
    if(Object.keys(data).length > 0) {
        config.data = data;
    }
    return axios.request(config);


}