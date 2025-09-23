# batchUserEvents
Simple implementation for collecting events in localStorage and batch them after a x amount of events has been collected. It will also collect events offline and send them to the server once online.

For this we run a very simple ExpressJS server but it is only to be able for you to run it straight away. This will work with any server of your choice.


In this demo case we set values we always know we want in classes/event.ts (userId and timeStamp) change the constructor in this class for it to suit your needs.



### Setup:
- Make sure you have NODE (https://nodejs.org/) and NPM (https://www.npmjs.com/) installed.
- Clone repo
- Open Terminal and run the following commands.
- > npm install
- > npm start (will also run "npm build" and "npm test", not that in webpack mode is set to development)
- > point browser to localhost:8081
- > after adding 5 (can be configured in either classes/batch.ts or when creating new Batch()) and client is online the eventsBatch will be send to the api.

### Usage:
Some basic Git commands are:
```
import setEvent from "./event/handleEvents";

// then call like this, could be click, onload or whereEver you need to track or save data.
// the JSON data can include whatever you want, if you wnt to separate it into variables intead it must be added in the constructor in classes/event.ts

setEvent({
    eventName: "clickEvent",
    eventType: "click"
});

```
You can for instance use a submit event from a form and save an entire form as an eventData.

A use case could be that you have an application that needs to work offline then you can just set the NUMBER_OF_EVENTS_BEFORE_BATCH to 1 so if online it will send it straight away and if offline it will send a batch once the user goes online again.
