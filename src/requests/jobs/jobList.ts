import RequestFactory from "~/interfaces/RequestFactory";
import Request from "~/client/Request";
import {JobRun} from "~/interfaces/models/JobRun";
import {resolveHandler} from "~/handler/HandlerManager";
import handle from "~/client/ClientFactory";

export default class JobList extends RequestFactory<JobRun[]> {


    public create(): Request {
        return new Request("/jobs", "GET");
    }

}
