import {JobRun} from "~/interfaces/models/JobRun";

export interface Batch {
    id: number;
    count: number;
    runs: JobRun[];
    batch_id: string;
    name: string | null;
    created_at: Date;
    queued: number;
    started: number;
    failed: number;
    succeeded: number;
    cancelled: number;
}