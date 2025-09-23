export class DataBatch {

  constructor(
    private key: string = 'batchData',
    private minEventsToBatch: number = 5,
    private intervalMillis: number = 1000 * 60,
    private apiUrl: string = '/api/data',
  ) {
    this.key = key;
    this.minEventsToBatch = minEventsToBatch;
    this.intervalMillis = intervalMillis;
    this.apiUrl = apiUrl;
  }

  getKey(): string {
    return `${this.key}`;
  }

  getApiUrl(): string {
    return `${this.apiUrl}`;
  }

  getMinEventsToBatch(): number {
    return this.minEventsToBatch;
  }

  getIntervalMillis(): number {
    return this.intervalMillis;
  }

  setKey(key: string) {
    this.key = key;
  }

  setApiUrl(apiUrl: string) {
    this.apiUrl = apiUrl;
  }

  setMinEventsToBatch(minEventsToBatch: number) {
    this.minEventsToBatch = minEventsToBatch;
  }

  setIntervalMillis(intervalMillis: number) {
    this.intervalMillis = intervalMillis;
  }

}
