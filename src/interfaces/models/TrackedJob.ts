import {JobRun} from "~/interfaces/models/JobRun";

export interface TrackedJob {
    class: string;
    alias: string;
    runs: JobRun[];
    count: number;
}