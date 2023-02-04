import {StackTraceLine} from "~/interfaces/models/StackTraceLine";

export interface JobException {
    id: number;
    created_at: Date;
    updated_at: Date;
    previous: JobException | null;
    message: string;
    job_status_id: number;
    line: number;
    file: string;
    code: number;
    stack_trace: StackTraceLine[];
}
