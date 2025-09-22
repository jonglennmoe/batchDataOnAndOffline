export {};
import { Event } from "../src/classes/event";
import setEvent from "./event/handleEvents";

console.log('BLOP BLOP BLOP')

const draw = (message: string = 'Hello, TypeScript2!') => {
  console.log(message);
  if (typeof document !== 'undefined') {
    let heading = document.createElement('p');
    heading.textContent = message;
    document.body.appendChild(heading);
    let link = document.createElement('p');
    link.textContent = 'Add Event';
    document.body.appendChild(link);
    link.addEventListener("click", function (e) {
      setEvent({
        eventName: "clickEvent",
        eventType: "click"
      });
    });

  }
};

let event = new Event(JSON.stringify({blop: 'blop'}));
console.log('event', event);
draw(event.describe());
