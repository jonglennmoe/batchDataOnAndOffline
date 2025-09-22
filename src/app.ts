export {};
import { Event } from "../src/classes/event";
import setEvent from "./event/handleEvents";

const draw = () => {
  if (typeof document !== 'undefined') {

    let p = document.createElement('p');
    let link = document.createElement('a');
    link.setAttribute('href', "javascript:;")
    link.textContent = 'Add Event Type 1';
    p.appendChild(link);
    document.body.appendChild(p);
    link.addEventListener("click", function (e) {
      setEvent({
        eventName: "Event Type 1",
        eventType: "clickEvent"
      });
    });

    let p2 = document.createElement('p');

    let link2 = document.createElement('a');
    link2.setAttribute('href', "javascript:;");
    link2.textContent = 'Add Event With different data';
    p2.appendChild(link2);
    document.body.appendChild(p2);
    link2.addEventListener("click", function (e) {
      setEvent({
        eventType: "Event Something Different",
        somethingElse: 'Something Else',
        extraSubdata: {
          subDataName: 'My subDatadata',
          subData: {
            thisCanTake: 'Anything'
          }
        },
        whatDidYouDo: "click"
      });
    });


  }
};
draw();
