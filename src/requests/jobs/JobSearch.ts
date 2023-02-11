import RequestFactory from "~/interfaces/RequestFactory";
import Request from "~/client/Request";
import {JobRun} from "~/interfaces/models/JobRun";
import {resolveHandler} from "~/listener/HandlerManager";
import handle from "~/client/ClientFactory";
import {TrackedJob} from "~/interfaces/models/TrackedJob";
import {PaginationResponse} from "~/interfaces/PaginationResponse";

export default class JobSearch extends RequestFactory<PaginationResponse<TrackedJob>> {


    public create(): Request {
        return new Request("/jobs", "GET");
    }

}
