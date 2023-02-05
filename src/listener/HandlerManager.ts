import Handler from "~/interfaces/Handler";
import Poll from "~/listener/poll";
import Request from "~/client/Request";

export function resolveHandler(request: Request): Handler {
    return new Poll();
}