// const {client} = require('./../../../index');
// const JobList = require('./../../../requests/jobs/jobList');
// const RequestType = require('./../../../client/Request');
//
// it('request object can be validly created', () => {
//     let requestObject = client.jobs.index().create();
//
//     client.jobs.index().create();
//
//     expect(requestObject).toBeInstanceOf(Request);
//     expect(requestObject.method).toBe("GET");
//     expect(requestObject.url).toBe("/jobs");
// });
//
// it('sends via polling', () => {
//     let ID = client.jobs.index().listen()
//         .onStartingInitialLoad(() => console.log('Starting initial load'));
// });