import {AxiosError, AxiosResponse} from "axios";
import handle from "~/client/ClientFactory";
import Request from "~/client/Request";
import Handler from "~/interfaces/Handler";
import Listener from "~/listener/Listener";
import Notifier from "~/listener/Notifier";
import {AbortControllerManager} from "~/listener/poll/AbortControllerManager";

export default class Poll implements Handler {

    private _ids: string[] = [];

    private loading: string[] = [];

    private controllerManager: AbortControllerManager = new AbortControllerManager();

    private controllers: AbortController[] = [];

    handle(request: Request, handler: Notifier<any>): Listener {
        const listenerId = setInterval(() => {
            this.handleRun(request, handler)
        }, 2000).toString();
        this._ids.push(listenerId);
        this.handleRun(request, handler);
        return new Listener(
            listenerId,
            (listenerId: string) => {
                this.stopHandling(listenerId);
            }
        );
    }

    stopHandling(handleId: string): void {
        clearInterval(handleId);

    }

    private handleRun(request: Request, handler: Notifier<any>) {
        const isFirstLoad: boolean = !this.loading.includes(handler.id);
        if(isFirstLoad) {
            this.loading.push(handler.id);
            handler.triggerStartingInitialLoad();
        }
        this.controllerManager.abortAll();
        handler.triggerStartingUpdate();
        handle(request, {
            controller: this.controllerManager.create(2000)
        })
            .then((response: AxiosResponse) => {
                handler.triggerUpdated(response.data);
            })
            .catch((error: AxiosError) => {
                handler.triggerErrored(error);
            }).finally(() => {
                handler.triggerFinishingUpdate()
                if(isFirstLoad) {
                    handler.triggerFinishingInitialLoad();
                }
            });
    }
}