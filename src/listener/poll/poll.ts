import axios, {AxiosError, AxiosResponse} from "axios";
import handle, {ClientOptions} from "~/client/ClientFactory";
import Request from "~/client/Request";
import Handler from "~/interfaces/Handler";
import Listener from "~/listener/Listener";
import Notifier from "~/listener/Notifier";
import {AbortControllerManager} from "~/listener/poll/AbortControllerManager";

export default class Poll implements Handler {

    private firstLoad: string[] = [];

    private loading: string[] = [];

    private controllerManager: AbortControllerManager = AbortControllerManager.getInstance();

    private _listenerIdToHandlerIdMap: {[key: string]: string } = {};

    handle(request: Request, handler: Notifier<any>): Listener {
        const listenerId = setInterval(() => {
            this.handleRun(request, handler)
        }, 2000).toString();
        this._listenerIdToHandlerIdMap[listenerId] = handler.id;
        this.handleRun(request, handler);
        return new Listener(
            listenerId,
            (listenerId: string) => {
                this.stopHandling(listenerId);
            }
        );
    }

    stopHandling(listenerId: string): void {
        clearInterval(listenerId);
        if(this._listenerIdToHandlerIdMap.hasOwnProperty(listenerId)) {
            this.controllerManager.abortAll(this._listenerIdToHandlerIdMap[listenerId]);
            delete this._listenerIdToHandlerIdMap[listenerId];
        }
    }

    private handleRun(request: Request, handler: Notifier<any>) {
        // Skip if already loading
        if(this.loading.includes(handler.id)) {
            return;
        }
        this.loading.push(handler.id);

        // Trigger initial load
        const isFirstLoad: boolean = !this.firstLoad.includes(handler.id);
        if(isFirstLoad) {
            this.firstLoad.push(handler.id);
            handler.triggerStartingInitialLoad();
        }

        // Trigger standard load
        handler.triggerStartingUpdate();

        // Build request config
        let config: ClientOptions = {
            controller: this.controllerManager.create(handler.id)
        };

        // Handle request
        handle(request, config)
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
                if(this.loading.indexOf(handler.id) > -1) {
                    this.loading.splice(
                        this.loading.indexOf(handler.id),
                        1
                    );
                }
            });
    }

}