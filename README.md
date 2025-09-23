# batchUserEvents
Simple implementation for collecting dataEntries in localStorage and batch them after a x amount of events has been collected. It will also collect data entrie offline and send them to the server once online. Note, the default url for the api call is set to "/api/data" this can be changed in dataBatc.ts (update tests if this is done) or when initiating a new Batch();.

This is ideal if you want to batch tracking (onclick, viewed etc.) or lets say you have data that need to be collected while offline and not lose it.

The data object can contain anything as long as it is valid JSON no restrictions.

For this we run a very simple ExpressJS server but it is only to be able for you to run it straight away (the api call will always return 200 OK). Implement any solution of your needs.

In this demo case we set values we always know we want in classes/data.ts (userId and timeStamp) change the constructor in this class for it to suit your needs.

### Setup:
- Make sure you have NODE (https://nodejs.org/) and NPM (https://www.npmjs.com/) installed.
- Clone repo
- Open Terminal and run the following commands.
- > npm install
- > npm start (will also run "npm build" and "npm test", not that in webpack mode is set to development)
- > point browser to localhost:8081
- > after adding 5 (can be configured in either classes/batchData.ts or when creating new Batch()) and client is online the dataBatch will be send to the api.

### Usage:
Examples on how to call the setDataEntry.
```
// import setDataEntry.
import setDataEntry from "./data/handleData";

// then call like this, could be click, onload or whereEver you need to track or save data.
// the JSON data can includeanything as long as it is valid JSON 

setDataEntry({
    name: "clickEvent",
    type: "click"
});

// example with sub-objects.

setDataEntry({
    type: "Something Different",
    somethingElse: 'Something Else',
    extraSubdata: {
        subDataName: 'My subDatadata',
        subData: {
            thisCanTake: 'Anything',
            key2: 'value 2'
        }
    }    
}

```
You can for instance use a submit event from a form and save an entire form as an eventData.

A use case could be that you have an application that needs to work offline then you can just set the NUMBER_OF_EVENTS_BEFORE_BATCH to 1 so if online it will send it straight away and if offline it will send a batch once the user goes online again.
