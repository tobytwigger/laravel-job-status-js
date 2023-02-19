import axios, {AxiosPromise, AxiosRequestConfig, CancelTokenSource} from "axios";
import Request from "~/client/Request";
import {baseUrl} from "~/config/config";

export interface ClientOptions {
    controller?: AbortController|CancelTokenSource
}

export default function handle(request: Request, options: ClientOptions = {}): AxiosPromise<unknown> {
    const config: AxiosRequestConfig = {
        url: request.url,
        method: request.method,
        baseURL: baseUrl(),
        // baseURL?: string;
        // headers?: AxiosRequestHeaders;
        // params?: any;
        // data?: D;
        // withCredentials?: boolean;

    }
    const data = request.data;
    if(Object.keys(data).length > 0) {
        config.data = data;
    }
    if(request.bypassAuth) {
        config.params = Object.assign((config.params || {}), {
            bypassAuth: request.bypassAuth
        });
    }
    if(options.controller) {
        if(isAbortController(options.controller)) {
            config.signal = options.controller.signal;
        } else {
            config.cancelToken = options.controller.token;
        }
    }
    if(Object.keys(request.params).length > 0) {
        config.params = Object.assign((config.params || {}), request.params)
    }
    return axios.request(config);


}

function isAbortController(controller: AbortController|CancelTokenSource): controller is AbortController {
    return 'signal' in controller;
}