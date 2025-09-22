export class Event {
  private static count: number = 0;

  constructor(
    public eventData: string,
    public userId: number = 9999,
    private timestamp: number = Date.now(),
) {
    this.eventData = eventData;
    this.userId = userId;
    this.timestamp = timestamp;

    Event.count++;
  }

  getEventData(): string {
    return `${this.eventData}`;
  }

  getUserId(): number {
    return this.userId;
  }

  getEventTimestamp(): number {
    return this.timestamp;
  }

  describe(): string {
    return `This is ${this.userId} at ${this.timestamp}.`;
  }

  getEventCount(): number {
    return Event.count;
  }

  resetEventCount(): void {
    Event.count = 0;
  }
}
