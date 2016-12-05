const {expect} = require('chai');
const numOfTriangles = require('../days/day3');

describe('numOfTriangles', () => {


  var data = [[1,2,6], [12,1,1], [2,5,6]];


  it('should be a function', function () {
    expect(numOfTriangles).to.be.a('function');
  });
  it('should take 1 argument', function () {
    expect(numOfTriangles.length).to.equal(1);
  });
  it('should return a number', function () {
    expect(numOfTriangles([[12,3,4]])).to.be.a('number');
  });
  it('should return return the number of possible triangles that can be calculated', function () {
    expect(numOfTriangles(data)).to.equal(1);
  });
});