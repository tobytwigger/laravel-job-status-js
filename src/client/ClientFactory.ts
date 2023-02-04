import Request from "~/client/Request";
import axios, {AxiosPromise} from "axios";

export default function handle(request: Request): AxiosPromise<unknown> {
    return axios.request({
        url: request.url,
        method: request.method,

        // baseURL?: string;
        // headers?: AxiosRequestHeaders;
        // params?: any;
        // data?: D;
        // withCredentials?: boolean;
    });
}