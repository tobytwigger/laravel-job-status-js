import Config from "~/interfaces/Config";

export interface CustomWindow extends Window {
    JobStatusConfig?: Config;

}