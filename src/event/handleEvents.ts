import { EventData } from "../classes/event";
import { Batch } from "../classes/batch";

const batch = new Batch();
let events = JSON.parse(window.localStorage.getItem(batch.getKey())) || [];

export default function setEvent(data: any) {
  events.push([new EventData(data)]);
  window.localStorage.setItem(batch.getKey(), JSON.stringify(events));
  batchEvents();
};

export function getEvents() {
  return events;
}

export function batchEvents() {
  console.log('Trying to send data. Have', getEvents().length, 'events to send');
  if (getEvents().length > (batch.getMinEventsToBatch() - 1) && window.navigator.onLine) {
    console.log('Sending data', events);
    sendEventsToApi();
  }
}

const resetEvents = () => {
  window.localStorage.removeItem(batch.getKey());
  events = [];
};


const sendEventsToApi = () => {
  // Simple example of the api call. Implement your own solution.
  fetch("/api/events", {
    method: "POST",
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(getEvents())
  }).then(res => {
    console.log("response:", res);
    resetEvents();
  }).catch((error) => {
    console.log(error)
  });
};


batchEvents();
setInterval(batchEvents, batch.getIntervalMillis());