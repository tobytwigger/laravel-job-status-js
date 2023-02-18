export class AbortControllerManager {
    private _controllers: AbortController[] = [];

    public create(timeout: number|null = null): AbortController {
        const controller = new AbortController();
        this._controllers.push(controller);
        if(timeout !== null) {
            setTimeout(() => controller.abort(), timeout)
        }
        return controller;
    }

    public abortAll(): void {
        for(const controller of this._controllers) {
            controller.abort();
        }
        this._controllers = [];
    }
}