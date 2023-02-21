import {JobStatusStatus} from "~/interfaces/models/JobStatusStatus";
import {JobException} from "~/interfaces/models/JobException";
import {JobSignal} from "~/interfaces/models/JobSignal";
import {JobMessage} from "~/interfaces/models/JobMessage";

export interface JobRun {
    alias: string;
    class: string;
    percentage: number;
    status: string;
    uuid: string;
    parent: JobRun | null;
    created_at: Date;
    messages: JobMessage[];
    signals: JobSignal[];
    exception: JobException | null;
    statuses: JobStatusStatus[];
    started_at: Date | null;
    finished_at: Date | null;
    batch_id: number;
    batch_id_uuid: string;
    id: number;
    tags: {
        [key: string]: string;
    };

    has_payload: boolean;

    connection_name: string | null;

    queue: string | null;

    released_runs: JobRun[];
}