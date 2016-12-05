const {expect} = require('chai');
const calcPass = require('../days/day5');

describe.only('calcPass', () => {


  var data = [[1,2,6], [12,1,1], [2,5,6]];


  it('should be a function', function () {
    expect(calcPass).to.be.a('function');
  });
  it('should take 1 argument', function () {
    expect(calcPass.length).to.equal(1);
  });
  it('should return a string', function () {
    expect(calcPass('ada')).to.be.a('string');
  });
  it('should return c6697b55 for the input of ffykfhsq', function () {
    expect(calcPass('ffykfhsq')).to.equal('c6697b55');
  });
});