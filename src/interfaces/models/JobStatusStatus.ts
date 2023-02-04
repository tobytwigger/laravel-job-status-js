import {Status} from "~/enums/Status";

export interface JobStatusStatus {
    id: number;
    status: Status;
    created_at: Date;
}