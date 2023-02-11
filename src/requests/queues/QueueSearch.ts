import RequestFactory from "~/interfaces/RequestFactory";
import Request from "~/client/Request";
import {JobRun} from "~/interfaces/models/JobRun";
import {resolveHandler} from "~/listener/HandlerManager";
import handle from "~/client/ClientFactory";
import {TrackedJob} from "~/interfaces/models/TrackedJob";
import {Queue} from "~/interfaces/models/Queue";
import {PaginationResponse} from "~/interfaces/PaginationResponse";

export default class QueueSearch extends RequestFactory<PaginationResponse<Queue>> {

    private _page : number = 1;

    private _perPage : number = 10;

    public page(page: number): QueueSearch {
        this._page = page;

        return this;
    }

    public perPage(perPage: number): QueueSearch {
        this._perPage = perPage;

        return this;
    }

    public create(): Request {
        let request = new Request("/queues", "GET");
        request.params = {
            page: this._page,
            per_page: this._perPage
        }
        return request;
    }

}
