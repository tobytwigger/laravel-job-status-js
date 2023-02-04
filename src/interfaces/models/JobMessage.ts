import {MessageType} from "~/enums/MessageType";

export interface JobMessage {
    id: number;
    message: string;
    created_at: Date;
    type: MessageType;
}