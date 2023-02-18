import { AxiosError } from "axios";
import {v4 as uuidv4} from 'uuid';
import Request from "~/client/Request";
import {resolveHandler} from "~/listener/HandlerManager";
import Listener from "~/listener/Listener";

export default class Notifier<ModelType> {


    private _request: Request;

    public id: string;

    constructor(request: Request) {
        this._request = request;
        this.id = uuidv4();
    }

    private _onStartingInitialLoad: (() => void)[] = [];

    public onStartingInitialLoad(handler: () => void): Notifier<ModelType> {
        this._onStartingInitialLoad.push(handler);

        return this;
    }

    public triggerStartingInitialLoad(): void
    {
        for(const callback of this._onStartingInitialLoad) {
            callback()
        }
    }

    private _onFinishingInitialLoad: (() => void)[] = [];

    public onFinishingInitialLoad(handler: () => void): Notifier<ModelType> {
        this._onFinishingInitialLoad.push(handler);

        return this;
    }

    public triggerFinishingInitialLoad(): void
    {
        for(const callback of this._onFinishingInitialLoad) {
            callback()
        }
    }

    private _onStartingUpdate: (() => void)[] = [];

    public onStartingUpdate(handler: () => void): Notifier<ModelType> {
        this._onStartingUpdate.push(handler);

        return this;
    }

    public triggerStartingUpdate(): void
    {
        for(const callback of this._onStartingUpdate) {
            callback()
        }
    }

    private _onFinishingUpdate: (() => void)[] = [];

    public onFinishingUpdate(handler: () => void): Notifier<ModelType> {
        this._onFinishingUpdate.push(handler);

        return this;
    }

    public triggerFinishingUpdate(): void
    {
        for(const callback of this._onFinishingUpdate) {
            callback()
        }
    }

    private _onUpdated: ((newResults: ModelType) => void)[] = [];

    public onUpdated(handler: (newResults: ModelType) => void): Notifier<ModelType> {
        this._onUpdated.push(handler);

        return this;
    }

    public triggerUpdated(newResults: ModelType): void
    {
        for(const callback of this._onUpdated) {
            callback(newResults);
        }
    }


    private _onErrored: ((error: AxiosError) => void)[] = [];

    public onErrored(handler: (error: AxiosError) => void): Notifier<ModelType> {
        this._onErrored.push(handler);

        return this;
    }

    public triggerErrored(error: AxiosError): void
    {
        for(const callback of this._onErrored) {
            callback(error);
        }
    }

    public start(): Listener
    {
        const handler = resolveHandler(this._request);
        return handler.handle(this._request, this);
    }
}

