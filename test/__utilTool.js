const v = require('../src/updater.js');
const expect = require('chai').expect;

describe('Util Tool DEBUG', () => {
  it('Should write to file', () => {});
});
describe('Testing manual update', () => {
  it('Should return a string', () => {
    v.update.updateManual('1.0.0', 'test');
    expect('1.0.0');
  });
});
describe('Testing Auto update', () => {
  it('Should return a string', () => {
    v.update.updateAuto('test');
    expect('package.json updated');
  });
});
