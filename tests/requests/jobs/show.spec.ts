import Request from "../../../src/client/Request";
import {client} from "../../../src";

it('request object can be validly created', () => {
    let requestObject: Request = client.jobs.show(44).create();

    expect(requestObject).toBeInstanceOf(Request);
    expect(requestObject.method).toBe("GET");
    expect(requestObject.url).toBe("/jobs/44");

});
