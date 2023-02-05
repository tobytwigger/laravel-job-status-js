import RequestFactory from "~/interfaces/RequestFactory";
import Request from "~/client/Request";
import {JobRun} from "~/interfaces/models/JobRun";
import {resolveHandler} from "~/listener/HandlerManager";
import handle from "~/client/ClientFactory";

export default class RunSignal extends RequestFactory<void> {

    private _shouldCancelJob: boolean = false;

    constructor(private runId: number, private signal: string) {
        super();
    }

    public create(): Request {
        let request = new Request(
            "/runs/" + this.runId.toString() + "/signal",
            "POST"
        );
        request.data = {
            signal: this.signal,
            cancel_job: this._shouldCancelJob,
        };
        return request;
    }

    public shouldCancelJob(): RequestFactory<void> {
        this._shouldCancelJob = true;

        return this;
    }

}
