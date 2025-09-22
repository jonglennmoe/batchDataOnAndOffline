import { EventData } from '../src/classes/event';
import { expect } from 'chai';


describe('Event tests', () => {
  it('getEventData should have correct value', () => {
    const event = new EventData(JSON.stringify({data: 'testdata'}));
    expect(event.getEventData()).to.equal('{"data":"testdata"}');
    event.resetEventCount();
  });

  it('getEventCount should have correct value and increment for every new instance', () => {
    let event = new EventData(JSON.stringify({data: 'testdata1'}));
    expect(event.getEventCount()).to.equal(1);
    new EventData(JSON.stringify({data: 'testdata2'}));
    expect(event.getEventCount()).to.equal(2);
    new EventData(JSON.stringify({data: 'testdata3'}));
    event = new EventData(JSON.stringify({data: 'testdata4'}));
    expect(event.getEventCount()).to.equal(4);
    event.resetEventCount();
    expect(event.getEventCount()).to.equal(0);
  });

  it('getUserId should have correct value when set', () => {
    const event = new EventData(JSON.stringify({data: 'testdata'}), 1234);
    expect(event.getUserId()).to.equal(1234);
    event.resetEventCount();
  });

  it('getUserId should have correct default value', () => {
    const event = new EventData(JSON.stringify({data: 'testdata'}));
    expect(event.getUserId()).to.equal(9999);
    event.resetEventCount();
  });

  it('getEventTimestamp should have correct value', () => {
    const event = new EventData(JSON.stringify({data: 'testdata'}));
    expect(event.getEventTimestamp()).to.equal(Date.now());
    event.resetEventCount();
  });
});