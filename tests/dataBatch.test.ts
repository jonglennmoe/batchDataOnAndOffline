import { DataBatch } from '../src/classes/dataBatch';
import { expect } from 'chai';


describe('DataBatch', () => {
  it('batch should have correct default values', () => {
    const batch = new DataBatch();
    expect(batch.getKey()).to.equal('batchData');
    expect(batch.getMinEventsToBatch()).to.equal(5);
    expect(batch.getIntervalMillis()).to.equal(60000);
    expect(batch.getApiUrl()).to.equal('/api/data');
  });

  it('batch should have correct values after init with values', () => {
    const batch = new DataBatch('testBatch', 30, 1000 * 60 * 9, '/api/test');
    expect(batch.getKey()).to.equal('testBatch');
    expect(batch.getMinEventsToBatch()).to.equal(30);
    expect(batch.getIntervalMillis()).to.equal(540000);
    expect(batch.getApiUrl()).to.equal('/api/test');
  });

  it('batch.setKey key should have correct value after updating.', () => {
    const batch = new DataBatch();
    expect(batch.getKey()).to.equal('batchData');
    batch.setKey('newBatchName');
    expect(batch.getKey()).to.equal('newBatchName');
  });

  it('batch.setMinEventsToBatch minEventsToBatch should have correct value after updating.', () => {
    const batch = new DataBatch();
    expect(batch.getMinEventsToBatch()).to.equal(5);
    batch.setMinEventsToBatch(13);
    expect(batch.getMinEventsToBatch()).to.equal(13);
  });

  it('batch.setIntervalMillis intervalMillis should have correct value after updating.', () => {
    const batch = new DataBatch();
    expect(batch.getIntervalMillis()).to.equal(60000);
    batch.setIntervalMillis(1000 * 60 * 4);
    expect(batch.getIntervalMillis()).to.equal(240000);
  });

  it('batch.setApiUrl intervalMillis should have correct value after updating.', () => {
    const batch = new DataBatch();
    expect(batch.getApiUrl()).to.equal('/api/data');
    batch.setApiUrl('/api/test');
    expect(batch.getApiUrl()).to.equal('/api/test');
  });
});