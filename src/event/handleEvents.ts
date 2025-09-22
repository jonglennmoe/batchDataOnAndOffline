import { Event } from '../classes/event';

const LOCAL_STORAGE_KEY: string = 'userEvents';
const NUMBER_OF_EVENTS_BEFORE_BATCH = 5;

let events = JSON.parse(window.localStorage.getItem(LOCAL_STORAGE_KEY)) || [];

export default function setEvent(data: any) {
  events.push([new Event(data)]);
  window.localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(events));
  batchEvents();
};

export function getEvents() {
  return events;
}

export function batchEvents() {
  console.log('trying to batch events. have', getEvents().length, 'events', 'to send');
  if (getEvents().length > (NUMBER_OF_EVENTS_BEFORE_BATCH - 1) && window.navigator.onLine) {
    sendEventsToApi();
  }
}

const resetEvents = () => {
  window.localStorage.removeItem(LOCAL_STORAGE_KEY);
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