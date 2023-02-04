import {client} from '~/index';
import JobList from "../../../src/requests/jobs/jobList";
import Request from "../../../src/client/Request";

it('request object can be validly created', () => {
    let requestObject: Request = client.jobs.index().create();

    expect(requestObject).toBeInstanceOf(Request);
    expect(requestObject.method).toBe("GET");
    expect(requestObject.url).toBe("/jobs");
});
