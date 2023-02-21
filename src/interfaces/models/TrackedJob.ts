import {JobRun} from "~/interfaces/models/JobRun";

export interface TrackedJob {
    class: string;
    alias: string;
    count: number;
    failure_reasons: JobFailureReason[];
    successful: number;
    failed: number;
    started: number;
    queued: number;
    cancelled: number;
}

export interface JobFailureReason {
    message: string;
    count: number;
}