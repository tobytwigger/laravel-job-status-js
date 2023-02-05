import Handler from "~/interfaces/Handler";

export default interface ListenerConfig {
    listenerId: string;

    handler: Handler;
}