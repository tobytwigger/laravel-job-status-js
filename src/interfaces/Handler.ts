import Request from "~/client/Request";
import Notifier from "~/listener/Notifier";
import ListenerConfig from "~/interfaces/ListenerConfig";

export default interface Handler {
    handle: (request: Request, handler: Notifier<any>) => ListenerConfig;

    stopHandling: (handleId: string) => void;

}