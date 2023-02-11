import RequestFactory from "~/interfaces/RequestFactory";
import Request from "~/client/Request";
import {JobRun} from "~/interfaces/models/JobRun";
import {resolveHandler} from "~/listener/HandlerManager";
import handle from "~/client/ClientFactory";

interface SearchParams {
    alias?: string,
}

export default class RunSearch extends RequestFactory<JobRun[]> {

    protected _alias: string|null = null;

    public whereAlias(alias: string): RunSearch {
        this._alias = alias;

        return this;
    }

    public create(): Request {
        let request = new Request("/runs", "GET");
        let searchParams: SearchParams = {};
        if(this._alias) {
            searchParams.alias = this._alias;
        }
        request.params = searchParams;
        return request;
    }

}
