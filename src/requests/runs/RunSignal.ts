import RequestFactory from "~/interfaces/RequestFactory";
import Request from "~/client/Request";
import {JobRun} from "~/interfaces/models/JobRun";
import {resolveHandler} from "~/listener/HandlerManager";
import handle from "~/client/ClientFactory";

export default class RunSignal extends RequestFactory<void> {

    constructor(private runId: number) {
        super();
    }

    public create(): Request {
        return new Request(
            "/runs/" + this.runId.toString() + "/signal",
            "POST");
    }



}
