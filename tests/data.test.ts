import { Data } from '../src/classes/data';
import { expect } from 'chai';


describe('Data tests', () => {
  it('getEventData should have correct value', () => {
    const event = new Data(JSON.stringify({data: 'testdata'}));
    expect(event.getDataEntry()).to.equal('{"data":"testdata"}');
    event.resetDataEntryCount();
  });

  it('getDataEntryCount should have correct value and increment for every new instance', () => {
    let event = new Data(JSON.stringify({data: 'testdata1'}));
    expect(event.getDataEntryCount()).to.equal(1);
    new Data(JSON.stringify({data: 'testdata2'}));
    expect(event.getDataEntryCount()).to.equal(2);
    new Data(JSON.stringify({data: 'testdata3'}));
    event = new Data(JSON.stringify({data: 'testdata4'}));
    expect(event.getDataEntryCount()).to.equal(4);
    event.resetDataEntryCount();
    expect(event.getDataEntryCount()).to.equal(0);
  });

  it('getUserId should have correct value when set', () => {
    const event = new Data(JSON.stringify({data: 'testdata'}), 1234);
    expect(event.getUserId()).to.equal(1234);
    event.resetDataEntryCount();
  });

  it('getUserId should have correct default value', () => {
    const event = new Data(JSON.stringify({data: 'testdata'}));
    expect(event.getUserId()).to.equal(9999);
    event.resetDataEntryCount();
  });

  it('getEventTimestamp should have correct value', () => {
    const event = new Data(JSON.stringify({data: 'testdata'}));
    expect(event.getDataTimestamp()).to.equal(Date.now());
    event.resetDataEntryCount();
  });
});