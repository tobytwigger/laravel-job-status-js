import RequestFactory from "~/interfaces/RequestFactory";
import Request from "~/client/Request";
import {JobRun} from "~/interfaces/models/JobRun";
import {resolveHandler} from "~/listener/HandlerManager";
import handle from "~/client/ClientFactory";
import {Batch} from "~/interfaces/models/Batch";

export default class BatchShow extends RequestFactory<Batch> {

    constructor(private batchId: number) {
        super();
    }

    public create(): Request {
        return new Request(
            "/batches/" + this.batchId.toString(),
            "GET"
        );
    }



}
