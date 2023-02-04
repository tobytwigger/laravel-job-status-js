import RequestFactory from "~/interfaces/RequestFactory";
import Handler from "~/interfaces/Handler";
import Poll from "~/handler/poll";

export function resolveHandler(request: RequestFactory<any>): Handler {
    return new Poll();
}