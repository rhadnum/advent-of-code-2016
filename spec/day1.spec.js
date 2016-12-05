const {expect} = require('chai');
const {calcBlockDistance} = require('../days/day1');

describe('calcBlockDistance()', () => {
  it('is a function', () => {
    expect(calcBlockDistance).to.be.a('function');
  });
  it('should take 1 argument', function () {
    expect(calcBlockDistance.length).to.equal(1);
  });
  it('should return a number', function () {
    expect(calcBlockDistance([' L5'])).to.be.a('number');
  });
  it('should return distance for 1 input with distance of 10', function () {
    expect(calcBlockDistance([' L10'])).to.equal(10);
  });
  it('should return the sum of the directions when they are all one direction', function () {
    expect(calcBlockDistance([' L1', ' L2', ' L3', ' L4', ' L5'])).to.equal(15);
  });
  it('should return the correct sum for a list of opposing distances', function () {
    expect(calcBlockDistance([' R1', ' L2', ' L5', ' R2'])).to.equal(10);
  });
  it('')
});