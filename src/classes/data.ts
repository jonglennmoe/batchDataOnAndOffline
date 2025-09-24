export class Data {
  private static count: number = 0;

  // Change after your needs. In this case userId and timeStamp has default values.
  constructor(
    private data: string,
    private userId: number = 9999,
    private timestamp: number = Date.now()
) {
    this.data = data;
    this.userId = userId;
    this.timestamp = timestamp;

    Data.count++;
  }

  getDataEntry(): string {
    return `${this.data}`;
  }

  getUserId(): number {
    return this.userId;
  }

  getDataTimestamp(): number {
    return this.timestamp;
  }

  getDataEntryCount(): number {
    return Data.count;
  }

  resetDataEntryCount(): void {
    Data.count = 0;
  }
}
