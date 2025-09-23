export {};
import { EventData } from "../src/classes/event";
import setEvent from "./event/handleEvents";

const init = () => {
  if (typeof document !== 'undefined') {
    let batchLinks = Array.from(document.getElementsByClassName("batchClick"));
    console.log('batchLinks', batchLinks);
    batchLinks.forEach((link) => {
      link.addEventListener("click", function () {
        const eventData = JSON.parse(link.getAttribute("data-data"));
        setEvent(eventData);
      });
    });

  }
};
init();
