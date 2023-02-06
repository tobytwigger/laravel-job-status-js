import JobSearch from "~/requests/jobs/JobSearch";
import JobShow from "~/requests/jobs/JobShow";
import BatchSearch from "~/requests/batches/BatchSearch";
import BatchShow from "~/requests/batches/BatchShow";
import RunSearch from "~/requests/runs/RunSearch";
import RunRetry from "~/requests/runs/RunRetry";
import RunSignal from "~/requests/runs/RunSignal";
import RunShow from "~/requests/runs/RunShow";
import RunCancel from "~/requests/runs/RunCancel";
import QueueSearch from "~/requests/queues/QueueSearch";
import QueueShow from "~/requests/queues/QueueShow";

export const client = {
    jobs: {
        search: () => new JobSearch(),
        show: (alias: string) => new JobShow(alias)
    },
    queues: {
        search: () => new QueueSearch(),
        show: (queue: string) => new QueueShow(queue)
    },
    batches: {
        search: () => new BatchSearch(),
        show: (batchId: number) => new BatchShow(batchId)
    },
    runs: {
        search: () => new RunSearch(),
        show: (runId: number) => new RunShow(runId),
        signal: (runId: number, signal: string) => new RunSignal(runId, signal),
        retry: (runId: number) => new RunRetry(runId),
        cancel: (runId: number) => new RunCancel(runId)
    }
}