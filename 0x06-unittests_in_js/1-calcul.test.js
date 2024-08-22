const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
    it('should return 4 when inputs are 1 and 3', () => {
        assert.strictEqual(calculateNumber('SUM', 1, 3), 4);
    });

    it('should return 5 when inputs are 1 and 3.7', () => {
        assert.strictEqual(calculateNumber('SUM', 1, 3.7), 5);
    });

    it('should return 5 when inputs are 1.2 and 3.7', () => {
        assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6);
    });

    it('should return 6 when inputs are 1.5 and 3.7', () => {
        assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
    });

    it('should return 0 when inputs are 0.1 and -0.1', () => {
        assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
    });

    it('should return 0 when inputs are 0 and 0', () => {
        assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0), 'Error');
    });

    it('should return 0 when inputs are 0 and 0', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 0, 1.4), 0);
    });
});
