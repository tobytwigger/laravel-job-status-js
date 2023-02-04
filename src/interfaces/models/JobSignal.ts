export interface JobSignal {
    id: number;
    signal: string;
    created_at: Date;
    handled_at: Date;
    cancel_job: boolean;
    parameters: {
        [key: string]: string;
    };
}