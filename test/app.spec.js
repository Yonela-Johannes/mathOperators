// importing dependencies
const assert = require('assert')
const { expect } = require('chai')

// importing node modules/functions
const { add } = require('../app')
const { subtract } = require('../app')
const { multiply } = require('../app')
const { divide } = require('../app')
const { modulus } = require('../app')

describe("math operators", () => {
    // add function
    describe('function add', () => {
        it("should add 2 numbers", () => {
            const result = add(2, 3)
            assert.equal(result, 5)
            expect(result).to.be.eq(5)

        });

        // check type of
        it('should return 0 for letters', () => {
            const result = add('y', 'j')
            assert.equal(result, 0)
            expect(result).to.be.eq(0)
        })
    });

    // subtract function
    describe('subtract function', () => {
        it("should subtract 2 numbers", () => {
            const result = subtract(5, 8)
            assert.equal(result, -3)
            expect(result).to.be.eq(-3)
        });

        // check type of
        it('should return 0 for letters', () => {
            const result = subtract('y', 'j')
            assert.equal(result, 0)
            expect(result).to.be.eq(0)
        })
    });

    // multiply function
    describe('multiply function', () => {
        it("should multiply 2 numbers", () => {
            const result = multiply(5, 8)
            assert.equal(result, 40)
            expect(result).to.be.eq(40)
        });

        // check type of
        it('should return 0 for letters', () => {
            const result = multiply('y', 'j')
            assert.equal(result, 0)
            expect(result).to.be.eq(0)
        })
    });

    // divide function
    describe('divide function', () => {
        it("should devide 2 numbers", () => {
            const result = divide(100, 2)
            assert.equal(result, 50)
            expect(result).to.be.eq(50)
        });

        // check type of
        it('should return 0 for letters', () => {
            const result = divide('y', 'j')
            expect(result).to.be.eq(0)
        })
    });
    // modulus function
    describe('modulus function', () => {
        it("should devide 2 numbers", () => {
            const result = modulus(100, 2)
            assert.equal(result, 0)
            expect(result).to.be.eq(0)
        });

        // check type of
        it('should return 0 for letters', () => {
            const result = modulus('y', 'j')
            assert.equal(result, 0)
            expect(result).to.be.eq(0)
        })
    });
})