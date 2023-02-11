import RequestFactory from "~/interfaces/RequestFactory";
import Request from "~/client/Request";
import {JobRun} from "~/interfaces/models/JobRun";
import {resolveHandler} from "~/listener/HandlerManager";
import handle from "~/client/ClientFactory";
import {PaginationParams, PaginationResponse} from "~/interfaces/PaginationResponse";

interface SearchParams {
    alias?: string[],
    status?: string[],
}

export default class RunSearch extends RequestFactory<PaginationResponse<JobRun>> {

    protected _alias: string[] = [];

    protected _status: string[] = [];

    private _page : number = 1;

    private _perPage : number = 10;

    public page(page: number): RunSearch {
        this._page = page;

        return this;
    }

    public perPage(perPage: number): RunSearch {
        this._perPage = perPage;

        return this;
    }

    public whereAlias(alias: string): RunSearch {
        this._alias.push(alias);

        return this;
    }

    public whereStatus(status: string): RunSearch {
        this._status.push(status);

        return this;
    }

    public create(): Request {
        let request = new Request("/runs", "GET");
        let params: SearchParams & PaginationParams = {
            page: this._page,
            per_page: this._perPage
        };
        if(this._alias) {
            params.alias = this._alias;
        }
        if(this._status) {
            params.status = this._status;
        }
        request.params = params;
        return request;
    }

}
