export default class Notifier<ModelType> {
    _onStartingInitialLoad: Array<() => void> = [];

    public onStartingInitialLoad(handler: () => void): Notifier<ModelType> {
        this._onStartingInitialLoad.push(handler);

        return this;
    }

    _onFinishingInitialLoad: Array<() => void> = [];

    public onFinishingInitialLoad(handler: () => void): Notifier<ModelType> {
        this._onFinishingInitialLoad.push(handler);

        return this;
    }


    _onStartingUpdate: Array<() => void> = [];

    public onStartingUpdate(handler: () => void): Notifier<ModelType> {
        this._onStartingUpdate.push(handler);

        return this;
    }

    _onFinishingUpdate: Array<() => void> = [];

    public onFinishingUpdate(handler: () => void): Notifier<ModelType> {
        this._onFinishingUpdate.push(handler);

        return this;
    }

    _onUpdated: Array<(newResults: ModelType) => void> = [];

    public onUpdated(handler: (newResults: ModelType) => void): Notifier<ModelType> {
        this._onUpdated.push(handler);

        return this;
    }




    _onErrored: Array<(error: Error) => void> = [];

    public onErrored(handler: (error: Error) => void): Notifier<ModelType> {
        this._onErrored.push(handler);

        return this;
    }

    public start(): string
    {
        return "Hello World";
    }
}

