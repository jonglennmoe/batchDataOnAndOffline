import { Batch } from '../src/classes/batch';
import { expect } from 'chai';


describe('Batch tests', () => {
  it('batch should have correct default values', () => {
    const batch = new Batch();
    expect(batch.getKey()).to.equal('batchData');
    expect(batch.getMinEventsToBatch()).to.equal(5);
    expect(batch.getIntervalMillis()).to.equal(60000);
  });

  it('batch should have correct values after init with values', () => {
    const batch = new Batch('testBatch', 30, 1000 * 60 * 9);
    expect(batch.getKey()).to.equal('testBatch');
    expect(batch.getMinEventsToBatch()).to.equal(30);
    expect(batch.getIntervalMillis()).to.equal(540000);
  });

  it('batch.setKey key should have correct value after updating.', () => {
    const batch = new Batch();
    expect(batch.getKey()).to.equal('batchData');
    batch.setKey('newBatchName');
    expect(batch.getKey()).to.equal('newBatchName');
  });

  it('batch.setMinEventsToBatch minEventsToBatch should have correct value after updating.', () => {
    const batch = new Batch();
    expect(batch.getMinEventsToBatch()).to.equal(5);
    batch.setMinEventsToBatch(13);
    expect(batch.getMinEventsToBatch()).to.equal(13);
  });

  it('batch.setIntervalMillis intervalMillis should have correct value after updating.', () => {
    const batch = new Batch();
    expect(batch.getIntervalMillis()).to.equal(60000);
    batch.setIntervalMillis(1000 * 60 * 4);
    expect(batch.getIntervalMillis()).to.equal(240000);
  });



/*
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
*/
});