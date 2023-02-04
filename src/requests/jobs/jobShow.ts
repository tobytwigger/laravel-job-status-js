import RequestFactory from "~/interfaces/RequestFactory";
import Request from "~/client/Request";
import {JobRun} from "~/interfaces/models/JobRun";
import {resolveHandler} from "~/handler/HandlerManager";
import handle from "~/client/ClientFactory";

export default class JobShow extends RequestFactory<JobRun> {

    constructor(private jobId: number) {
        super();
    }

    public create(): Request {
        return new Request(
            "/jobs/" + this.jobId.toString(),
            "GET"
        );
    }



}
