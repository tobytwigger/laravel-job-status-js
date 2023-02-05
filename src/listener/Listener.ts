export default class Listener {
    private _listenerId: string;
    private _stopListening: (listenerId: string) => void;

    constructor(listenerId: string, stopListening: (listenerId: string) => void) {
        this._listenerId = listenerId;
        this._stopListening = stopListening;
    }

    public stop() {
        this._stopListening(this._listenerId);
    }
}