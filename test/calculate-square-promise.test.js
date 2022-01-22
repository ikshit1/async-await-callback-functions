const calculateSquare = require('../testing-callbackFunctions/calculate-square-promise');
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
const expect = chai.expect;

//Mocha use by default 2seconds times
//to update timeout we have to change the settings using this.timeout() function....
// always add 1 second more then the actual timeout

// return is used to test async function
// another way is to use notify
// if return and done function is removed then test will always pass


// describe('calculateSquare', function() {
//     it('should resolve to 4 if passed 2', function() {
//         return expect(calculateSquare(2)).to.be.eventually.be.equal(4);
//     });
//     it('should fullfilled to 4 if passed 2', function() {
//         return expect(calculateSquare(2)).to.be.fulfilled;
//     });
//     it('should reject if passed a string instead of a number', function() {
//         return expect(calculateSquare('string')).to.be.rejected;
//     })
// });
describe('calculateSquare', function() {
    this.timeout(4000);
    it('should resolve to 4 if passed 2', function(done) {
        expect(calculateSquare(2)).to.be.eventually.be.equal(4).notify(done);
    });
    it('should fullfilled to 4 if passed 2', function(done) {
        expect(calculateSquare(2)).to.be.fulfilled.notify(done);
    });
    it('should reject if passed a string instead of a number', function(done) {
        expect(calculateSquare('string')).to.be.rejected.notify(done);
    })
});


// To make multiple assertions
// we use then and catch method

describe('calculateSquare', function() {
    this.timeout(4000);
    it('using multiple assertions - should resolve to 4 if passed 2', function() {
        return calculateSquare(2).then(result => {
            expect(result).to.be.above(3);
            expect(result).to.be.equal(4);
            expect(result).to.be.lessThan(5);
        })
    });

    it('using multiple assertions - should reject if passed a string', function() {
        return calculateSquare(2).catch(reason => {
            expect(reason).to.not.be.equal(null)
        })
    });
});