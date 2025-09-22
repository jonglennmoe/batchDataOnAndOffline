# batchUserEvents
Simple implementation for collecting events in localStorage and batch them after a x amount of events has been collected. It will also collect events offline and send them to the server once online.

For this we run a very simple ExpressJS server but it is only to be able for you to run it straight away. This will work with any server of your choice.


In this demo case we set values we always know we want in classes/event.ts (userId and timeStamp) change the constructor in this class for it to suit your needs.



###To use:
- Clone repo
- > npm install
- > npm start (will also run "npm build" and "npm test", not that in webpack mode is set to development)
- > point browser to localhost:8081
- > after adding 5 (can be configured in event/handleEvents.ts) and client is online the eventsBatch will be send to the api.

