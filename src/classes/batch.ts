export class Batch {

  constructor(
    private key: string = 'batchData',
    private minEventsToBatch: number = 5,
    private intervalMillis: number = 1000 * 60,
  ) {
    this.key = key;
    this.minEventsToBatch = minEventsToBatch;
    this.intervalMillis = intervalMillis;
  }

  getKey(): string {
    return `${this.key}`;
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

  setMinEventsToBatch(minEventsToBatch: number) {
    this.minEventsToBatch = minEventsToBatch;
  }

  setIntervalMillis(intervalMillis: number) {
    this.intervalMillis = intervalMillis;
  }

}
