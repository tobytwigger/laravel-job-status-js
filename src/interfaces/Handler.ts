import Request from "~/client/Request";
import Notifier from "~/listener/Notifier";

export default interface Handler {
    handle: (request: Request, handler: Notifier<any>) => string;

    stopHandling: (handleId: string) => void;

}