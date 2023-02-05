import Request from "~/client/Request";
import handle from "~/client/ClientFactory";
import Notifier from "~/listener/Notifier";
import {AxiosPromise} from "axios";

export default abstract class RequestFactory<ReturnType> {

    abstract create(): Request;

    public listen(): Notifier<ReturnType> {
        return new Notifier<ReturnType>(this.create());
    }

    public send(): AxiosPromise<ReturnType> {
        return handle(this.create()) as AxiosPromise<ReturnType>;
    }

}