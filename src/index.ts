import JobSearch from "~/requests/jobs/JobSearch";
import JobShow from "~/requests/jobs/JobShow";
import BatchSearch from "~/requests/batches/BatchSearch";
import BatchShow from "~/requests/batches/BatchShow";
import RunSearch from "~/requests/runs/RunSearch";
import RunRetry from "~/requests/runs/RunRetry";
import RunSignal from "~/requests/runs/RunSignal";
import RunShow from "~/requests/runs/RunShow";
import ListenerConfig from "~/interfaces/ListenerConfig";

export const client = {
    jobs: {
        search: () => new JobSearch(),
        show: (jobId: number) => new JobShow(jobId)
    },
    batches: {
        search: () => new BatchSearch(),
        show: (batchId: number) => new BatchShow(batchId)
    },
    runs: {
        search: () => new RunSearch(),
        show: (runId: number) => new RunShow(runId),
        signal: (runId: number) => new RunSignal(runId),
        retry: (runId: number) => new RunRetry(runId),
    }
}