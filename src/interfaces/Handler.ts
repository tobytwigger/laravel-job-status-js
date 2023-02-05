import Request from "~/client/Request";
import Notifier from "~/listener/Notifier";
import Listener from "~/listener/Listener";

export default interface Handler {
    handle: (request: Request, handler: Notifier<any>) => Listener;

    stopHandling: (handleId: string) => void;

}