import Request from "~/client/Request";
import {JobRun} from "~/interfaces/models/JobRun";
import {resolveHandler} from "~/handler/HandlerManager";
import handle from "~/client/ClientFactory";

export default abstract class RequestFactory<ReturnType> {

    abstract create(): Request

    public onUpdate(handler: (jobs: ReturnType) => void): string {
        return resolveHandler(this).handle(this.create(), handler);
    }

    public get(): Promise<ReturnType> {
        return handle(this.create()) as Promise<ReturnType>;
    }

}