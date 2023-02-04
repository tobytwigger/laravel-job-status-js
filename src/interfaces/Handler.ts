import Request from "~/client/Request";

export default interface Handler {
    handle: (request: Request, handler: (jobs: any) => void) => string;

    stopHandling: (handleId: string) => void;

}