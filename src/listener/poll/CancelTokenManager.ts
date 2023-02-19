import axios, {CancelTokenSource, CancelTokenStatic} from "axios";

export class CancelTokenManager {

    private static _instance: CancelTokenManager = new CancelTokenManager();

    private _tokens: {[key: string]: CancelTokenSource[]} = {};

    private constructor() {

    }

    public static getInstance(): CancelTokenManager
    {
        if(CancelTokenManager._instance){
            CancelTokenManager._instance = new CancelTokenManager();
        }
        return CancelTokenManager._instance;
    }

    public create(handlerId: string, timeout: number|null = null): CancelTokenSource {
        const CancelToken = axios.CancelToken;
        const source = CancelToken.source();

        if(!this._tokens.hasOwnProperty(handlerId)) {
            this._tokens[handlerId] = [];
        }
        this._tokens[handlerId].push(source);
        if(timeout !== null) {
            setTimeout(() => source.cancel('Cancelled due to timeout.'), timeout)
        }
        return source;
    }

    public abortAll(handlerId: string): void {
        if(!this._tokens.hasOwnProperty(handlerId)) {
            this._tokens[handlerId] = [];
        }
        for(const controller of this._tokens[handlerId]) {
            controller.cancel('Cancelled due to new request');
        }
        this._tokens[handlerId] = [];
    }
}