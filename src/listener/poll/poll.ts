import axios, {AxiosError, AxiosResponse, AxiosRequestConfig} from "axios";
import handle, {ClientOptions} from "~/client/ClientFactory";
import Request from "~/client/Request";
import Handler from "~/interfaces/Handler";
import Listener from "~/listener/Listener";
import Notifier from "~/listener/Notifier";
import {AbortControllerManager} from "~/listener/poll/AbortControllerManager";
import semverGte from "semver/functions/gte";
import {CancelTokenManager} from "~/listener/poll/CancelTokenManager";

export default class Poll implements Handler {

    private _ids: string[] = [];

    private loading: string[] = [];

    private controllerManager: AbortControllerManager = AbortControllerManager.getInstance();

    private cancelTokenManager: CancelTokenManager = CancelTokenManager.getInstance();

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
        // Trigger initial load
        const isFirstLoad: boolean = !this.loading.includes(handler.id);
        if(isFirstLoad) {
            this.loading.push(handler.id);
            handler.triggerStartingInitialLoad();
        }

        // Trigger standard load
        this.cancelPendingRequests(handler.id);
        handler.triggerStartingUpdate();

        // Build request config
        let config: ClientOptions = {};
        config.controller = semverGte(axios.VERSION, '0.22.0')
            ? this.controllerManager.create(handler.id)
            : this.cancelTokenManager.create(handler.id);

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
            });
    }

    private cancelPendingRequests(handlerId: string) {
        if(semverGte(axios.VERSION, '0.22.0')) {
            this.controllerManager.abortAll(handlerId);
        } else {
            controller: this.cancelTokenManager.abortAll(handlerId)
        }
    }
}