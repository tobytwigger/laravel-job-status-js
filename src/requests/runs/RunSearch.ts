import RequestFactory from "~/interfaces/RequestFactory";
import Request from "~/client/Request";
import {JobRun} from "~/interfaces/models/JobRun";
import {resolveHandler} from "~/listener/HandlerManager";
import handle from "~/client/ClientFactory";
import {PaginationResponse} from "~/interfaces/PaginationResponse";

interface SearchParams {
    alias?: string[],
    status?: string[],
}

export default class RunSearch extends RequestFactory<PaginationResponse<JobRun>> {

    protected _alias: string[] = [];

    protected _status: string[] = [];

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
        let searchParams: SearchParams = {};
        if(this._alias) {
            searchParams.alias = this._alias;
        }
        if(this._status) {
            searchParams.status = this._status;
        }
        request.params = searchParams;
        return request;
    }

}
