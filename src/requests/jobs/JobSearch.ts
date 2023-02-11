import RequestFactory from "~/interfaces/RequestFactory";
import Request from "~/client/Request";
import {JobRun} from "~/interfaces/models/JobRun";
import {resolveHandler} from "~/listener/HandlerManager";
import handle from "~/client/ClientFactory";
import {TrackedJob} from "~/interfaces/models/TrackedJob";
import {PaginationResponse} from "~/interfaces/PaginationResponse";

export default class JobSearch extends RequestFactory<PaginationResponse<TrackedJob>> {

    private _page : number = 1;

    private _perPage : number = 10;

    public page(page: number): JobSearch {
        this._page = page;

        return this;
    }

    public perPage(perPage: number): JobSearch {
        this._perPage = perPage;

        return this;
    }

    public create(): Request {
        let request = new Request("/jobs", "GET");
        request.params = {
            page: this._page,
            per_page: this._perPage
        }
        return request;
    }

}
