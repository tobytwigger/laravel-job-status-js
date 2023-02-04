import JobList from "~/requests/jobs/jobList";
import JobShow from "~/requests/jobs/jobShow";

export const client = {
    jobs: {
        index: () => new JobList(),
        show: (jobId: number) => new JobShow(jobId)
    }
}