export const conf = {
  appName:'samuels online store',
  expireDate:'2023/30/12',
  customerName:'samuel l jackson'
};

const LOCAL_STORAGE_KEY: string = 'userEvents';
const NUMBER_OF_EVENTS_BEFORE_BATCH: number = 5;
const INTERVAL_BETWEEN_TRYING_TO_BATCH: number = 1000 * 60;