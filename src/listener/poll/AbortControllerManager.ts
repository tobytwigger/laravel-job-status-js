export class AbortControllerManager {

    private static _instance: AbortControllerManager = new AbortControllerManager();

    private _controllers: {[key: string]: AbortController[]} = {};

    private constructor() {

    }

    public static getInstance(): AbortControllerManager
    {
        if(AbortControllerManager._instance){
            AbortControllerManager._instance = new AbortControllerManager();
        }
        return AbortControllerManager._instance;
    }

    public create(handlerId: string, timeout: number|null = null): AbortController {
        const controller = new AbortController();
        if(!this._controllers.hasOwnProperty(handlerId)) {
            this._controllers[handlerId] = [];
        }
        this._controllers[handlerId].push(controller);
        if(timeout !== null) {
            setTimeout(() => controller.abort(), timeout)
        }
        return controller;
    }

    public abortAll(handlerId: string): void {
        if(!this._controllers.hasOwnProperty(handlerId)) {
            this._controllers[handlerId] = [];
        }
        for(const controller of this._controllers[handlerId]) {
            controller.abort();
        }
        this._controllers[handlerId] = [];
    }
}