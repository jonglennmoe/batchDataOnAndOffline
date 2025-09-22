
const LOCAL_STORAGE_KEY: string = 'userEvents';
const NUMBER_OF_EVENTS_BEFORE_BATCH = 5;
const INTERVAL_BETWEEN_TRYING_TO_BATCH = 1000 * 60;

let events = JSON.parse(window.localStorage.getItem(LOCAL_STORAGE_KEY)) || [];

@@ -40,4 +41,7 @@ const sendEventsToApi = () => {
}).catch((error) => {
console.log(error)
});
};
};

batchEvents();
setInterval(batchEvents, INTERVAL_BETWEEN_TRYING_TO_BATCH);
