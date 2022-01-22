const calculateSquare = require('../testing-callbackFunctions/calculate-square');
const expect = require('chai').expect;
// To test async function, we have to explicitly tell mocha by passing an argument done
// done function w
describe('calculateSquare', function() {
    it('should return 4 if passed 2', function(done) {
        calculateSquare(2, function(error, result) {
            expect(result).to.equal(4);
            done();
        })
    })

    it('should return 25 if passed 5', function(done) {
        calculateSquare(5, function(error, result) {
            expect(result).to.equal(25);
            done();
        })
    })

    it('should return an error if number is not passed', function(done) {
        calculateSquare('testing new', function(error, result) {
            expect(error).to.not.equal(null);
            done();
        })
    })
});