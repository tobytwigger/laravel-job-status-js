import RequestFactory from "~/interfaces/RequestFactory";
import Request from "~/client/Request";
import {JobRun} from "~/interfaces/models/JobRun";
import {resolveHandler} from "~/listener/HandlerManager";
import handle from "~/client/ClientFactory";
import {TrackedJob} from "~/interfaces/models/TrackedJob";
import {Queue} from "~/interfaces/models/Queue";
import {PaginationResponse} from "~/interfaces/PaginationResponse";

export default class QueueSearch extends RequestFactory<PaginationResponse<Queue>> {


    public create(): Request {
        return new Request("/queues", "GET");
    }

}
