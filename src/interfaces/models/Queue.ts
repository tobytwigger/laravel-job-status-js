import {JobRun} from "~/interfaces/models/JobRun";

export interface Queue {
  count: number;
  runs: JobRun[];
  name: string | null;
  queued: number;
  started: number;
  failed: number;
  succeeded: number;
  cancelled: number;
}