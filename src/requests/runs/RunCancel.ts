import RequestFactory from "~/interfaces/RequestFactory";
import Request from "~/client/Request";
import {JobRun} from "~/interfaces/models/JobRun";
import {resolveHandler} from "~/listener/HandlerManager";
import handle from "~/client/ClientFactory";
import RunSignal from "~/requests/runs/RunSignal";

export default class RunCancel extends RunSignal {

    constructor(runId: number) {
        super(runId, 'cancel');
        super.shouldCancelJob();
    }

}
