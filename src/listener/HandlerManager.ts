import Request from "~/client/Request";
import Handler from "~/interfaces/Handler";
import Poll from "~/listener/poll/poll";

export function resolveHandler(request: Request): Handler {
    return new Poll();
}