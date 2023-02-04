import Handler from "~/interfaces/Handler";
import Request from "~/client/Request";
import handle from "~/client/ClientFactory";
import {AxiosResponse} from "axios";

export default class Poll implements Handler {

    handle(request: Request, handler: (jobs: any) => void): string {
        return setInterval(() => {
            this.handleRun(request, handler)
        }, 5000).toString();
    }

    stopHandling(handleId: string): void {
        clearInterval(handleId);
    }

    private handleRun(request: Request, handler: (jobs: any) => void) {
        handle(request)
            .then((response: AxiosResponse) => handler(response.data));
    }
}