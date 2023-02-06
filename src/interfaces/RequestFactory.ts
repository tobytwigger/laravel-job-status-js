import Request from "~/client/Request";
import handle from "~/client/ClientFactory";
import Notifier from "~/listener/Notifier";
import {AxiosPromise} from "axios";

export default abstract class RequestFactory<ReturnType> {

    abstract create(): Request;

    protected _bypassAuth: boolean = false;

    public listen(): Notifier<ReturnType> {
        let request = this.create();
        request.bypassAuth = this._bypassAuth;
        return new Notifier<ReturnType>(request);
    }

    public bypassAuth(): RequestFactory<ReturnType> {
        this._bypassAuth = true;
        return this;
    }

    public send(): AxiosPromise<ReturnType> {
        let request = this.create();
        request.bypassAuth = this._bypassAuth;
        return handle(request) as AxiosPromise<ReturnType>;
    }

}