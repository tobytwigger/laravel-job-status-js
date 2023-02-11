import RequestFactory from "~/interfaces/RequestFactory";
import Request from "~/client/Request";
import {JobRun} from "~/interfaces/models/JobRun";
import {resolveHandler} from "~/listener/HandlerManager";
import handle from "~/client/ClientFactory";
import {Batch} from "~/interfaces/models/Batch";
import {PaginationResponse} from "~/interfaces/PaginationResponse";

export default class BatchSearch extends RequestFactory<PaginationResponse<Batch>> {


    public create(): Request {
        return new Request("/batches", "GET");
    }

}
