export {};
import setDataEntry from "./data/handleData";

const init = () => {
  if (typeof document !== 'undefined') {
    let batchLinks = Array.from(document.getElementsByClassName("batchClick"));
    batchLinks.forEach((link) => {
      link.addEventListener("click", function () {
        const data = JSON.parse(link.getAttribute("data-data"));
        setDataEntry(data);
      });
    });
  }
};
init();
