const chai = require('chai');
const expect = chai.expect;

const calculateNumber = require('./2-calcul');

describe('calculateNumber', () => {
  it('should return 4 when inputs are 1 and 3', () => {
    expect(calculateNumber(1, 3)).to.equal(4);
  });

  it('should return 5 when inputs are 1 and 3.7', () => {
    expect(calculateNumber(1, 3.7)).to.equal(5);
  });

  it('should return 5 when inputs are 1.2 and 3.7', () => {
    expect(calculateNumber(1.2, 3.7)).to.equal(5);
  });

  it('should return 6 when inputs are 1.5 and 3.7', () => {
    expect(calculateNumber(1.5, 3.7)).to.equal(6);
  });

  it('should return 0 when inputs are 0.1 and -0.1', () => {
    expect(calculateNumber(0.1, -0.1)).to.equal(0);
  });

  it('should return 0 when inputs are 0 and 0', () => {
    expect(calculateNumber(0, 0)).to.equal(0);
  });
});
