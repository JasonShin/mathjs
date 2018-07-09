const assert = require('assert')
const matrix = require('../../src/utils/matrix')

describe('matrix', function () {
  describe('getMatrixDataType', function () {
    it('should return number for pure numbers', function () {
      const result = matrix.getMatrixDataType([ [1, 2, 3], [4, 5, 6], [1, 8, 9] ])
      assert.equal('number', result)
    })
    it('should return number for pure numbers with NaN', function () {
      const result = matrix.getMatrixDataType([ [1, 2, NaN], [4, 5, 6], [1, 8, 9] ])
      assert.equal('number', result)
    })
    it('should return string', function () {
      const result = matrix.getMatrixDataType([ ['string'], ['test'] ])
      assert.equal('string', result)
    })
    it('should return boolean', function () {
      const result = matrix.getMatrixDataType([ [true], [false] ])
      assert.equal('boolean', result)
    })
    it('should return undefined', function () {
      const result = matrix.getMatrixDataType([ [undefined], [undefined] ])
      assert.equal('undefined', result)
    })
    it('should return null', function () {
      const result = matrix.getMatrixDataType([ [null], [null] ])
      assert.equal('null', result)
    })
    it('should return null', function () {
      const result = matrix.getMatrixDataType([ [null], [null] ])
      assert.equal('null', result)
    })
    it('should return mixed when number and null are given', function () {
      const result = matrix.getMatrixDataType([ [1], [null] ])
      assert.equal('mixed', result)
    })
    it('should return mixed when number and string are given', function () {
      const result = matrix.getMatrixDataType([ [1], ['string'] ])
      assert.equal('mixed', result)
    })
    it('should return undefined if the input is not a matrix', function () {
      // Not equal in size and one is an empty array
      const result1 = matrix.getMatrixDataType([ [1], [] ])
      // Not equal in size
      const result2 = matrix.getMatrixDataType([ [1, 2, 3], [1, 2] ])
      // Empty array as an input
      const result3 = matrix.getMatrixDataType([])

      assert.equal(undefined, result1)
      assert.equal(undefined, result2)
      assert.equal(undefined, result3)
    })
  })
})
