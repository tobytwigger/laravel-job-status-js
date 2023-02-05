import RequestFactory from "~/interfaces/RequestFactory";
import Request from "~/client/Request";
import {JobRun} from "~/interfaces/models/JobRun";
import {resolveHandler} from "~/listener/HandlerManager";
import handle from "~/client/ClientFactory";
import {TrackedJob} from "~/interfaces/models/TrackedJob";

export default class JobShow extends RequestFactory<TrackedJob> {

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
