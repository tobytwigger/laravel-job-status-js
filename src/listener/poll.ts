import Handler from "~/interfaces/Handler";
import Request from "~/client/Request";
import handle from "~/client/ClientFactory";
import {AxiosResponse, AxiosError} from "axios";
import Notifier from "~/listener/Notifier";
import Listener from "~/listener/Listener";

export default class Poll implements Handler {

    private _ids: string[] = [];

    private loading: string[] = [];

    handle(request: Request, handler: Notifier<any>): Listener {
        let listenerId = setInterval(() => {
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
        let isFirstLoad: boolean = !this.loading.includes(handler.id);
        if(isFirstLoad) {
            this.loading.push(handler.id);
            handler.triggerStartingInitialLoad();
        }
        handler.triggerStartingUpdate();
        handle(request)
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