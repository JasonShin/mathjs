const isArrayMatrix = require('./collection/isArrayMatrix.js')
const getMatrixDataType = require('./collection/getMatrixDataType')

console.log('isarrmat 1', isArrayMatrix(
  [ [1, 2], [1, 2] ]
))

console.log('isarrmat 2', isArrayMatrix(
  [ [1, 2], [1] ]
))

console.log('isarrmat 3', isArrayMatrix(
  [ 1, 2 ]
))

console.log(getMatrixDataType(
  [ [1, 2, 3], [4, 5, 6], [1, 8, 9] ]
))

console.log(getMatrixDataType(
  [ [1, 2, true], [4, 5, 6], [1, 'string', 9] ]
))

console.log(getMatrixDataType(
  [ [1, 2, {}], [4, 5, 6], [1, 1, 9] ]
))

console.log(getMatrixDataType(
  [ [1, 2, NaN], [4, 5, 6], [1, 1, 9] ]
))

console.log(getMatrixDataType(
  [ [true], [false] ]
))

console.log(getMatrixDataType(
  [ ['string'], ['test', 'test'] ]
))

console.log(getMatrixDataType(
  []
))

console.log(getMatrixDataType(
  [1, 2]
))
