import Request from "~/client/Request";
import {JobRun} from "~/interfaces/models/JobRun";
import {resolveHandler} from "~/handler/HandlerManager";
import handle from "~/client/ClientFactory";
import Notifier from "~/handler/Notifier";

export default abstract class RequestFactory<ReturnType> {

    abstract create(): Request

    public listen(): Notifier<ReturnType> {
        return new Notifier<ReturnType>();
    }

    public get(): Promise<ReturnType> {
        return handle(this.create()) as Promise<ReturnType>;
    }

}