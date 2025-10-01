import { Data } from "../classes/data";
import { DataBatch } from "../classes/dataBatch";

const batch: DataBatch = new DataBatch();
let data = JSON.parse(window.localStorage.getItem(batch.getKey())) || [];

export default function setDataEntry(inDataObj: any) {
  data.push([new Data(inDataObj)]);
  window.localStorage.setItem(batch.getKey(), JSON.stringify(data));
  batchData();
}

const getData = () => {
  return data;
};

const batchData = () => {
  console.log('Trying to send data. Have', getData().length, 'data entries to send. Will not send until we have', (batch.getMinEventsToBatch() - 1), 'to send');
  if (getData().length > (batch.getMinEventsToBatch() - 1) && window.navigator.onLine) {
    console.log('Sending dataBatch');
    sendDataToApi();
  }
};

const resetData = () => {
  window.localStorage.removeItem(batch.getKey());
  data = [];
};

const sendDataToApi = () => {
  // Simple example of the api call. Implement your own solution.
  fetch(batch.getApiUrl(), {
    method: "POST",
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(getData())
  }).then(res => {
    console.log("response:", res);
    resetData();
  }).catch((error) => {
    console.log(error)
  });
};

batchData();
setInterval(batchData, batch.getIntervalMillis());
