import {Method} from "axios";

export default class Request
{

    constructor(url: string, method: Method) {
        this._url = url;
        this._method = method;
    }

    private _url: string;

    private _method: Method;


    get url(): string {
        return this._url;
    }

    set url(value: string) {
        this._url = value;
    }

    get method(): Method {
        return this._method;
    }

    set method(value: Method) {
        this._method = value;
    }
}