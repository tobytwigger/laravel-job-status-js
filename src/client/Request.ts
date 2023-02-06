import {Method} from "axios";

export default class Request
{

    constructor(url: string, method: Method) {
        this._url = url;
        this._method = method;
    }

    private _url: string;

    private _method: Method;

    private _bypassAuth: boolean = false;

    private _data: {[key: string]: any} = {};

    get bypassAuth(): boolean {
        return this._bypassAuth;
    }

    set bypassAuth(value: boolean) {
        this._bypassAuth = value;
    }

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


    get data(): { [p: string]: any } {
        return this._data;
    }

    set data(value: { [p: string]: any }) {
        this._data = value;
    }
}