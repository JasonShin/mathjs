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
console.time('test recursion')
console.log(getMatrixDataType(rows))
console.timeEnd('test recursion')

console.time('test plain loop')
console.log(getMatrixDataType2(rows))
console.timeEnd('test plain loop')
