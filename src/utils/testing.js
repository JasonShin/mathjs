const { getMatrixDataType, getMatrixDataType2 } = require('./matrix')

// Simple matrix construction
const numRows = 10000
const numCols = 10000

let newRow = []
for (let col = 0; col < numCols; col++) {
  newRow.push(col)
}

let rows = [];
for (let row = 0; row < numRows; row++) {
  rows.push(newRow.slice())
}
console.time('test')
console.log(getMatrixDataType(rows))
console.timeEnd('test')

console.time('test2')
console.log(getMatrixDataType2(rows))
console.timeEnd('test2')
