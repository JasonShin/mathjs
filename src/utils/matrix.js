/**
 * Check the datatype of a given object
 * @param array
 * @return string
 */
exports.getMatrixDataType = function (array) {
  if (Array.isArray(array)) {
    // clone the array to avoid any side effects
    const _array = array.slice()
    // Checking the array type
    const result = _array.reduce((types, vector) => {
      vector.forEach((entity) => {
        let entityType = typeof entity

        // typeof null is always object..
        if (entity === null) {
          entityType = 'null'
        }
        if (types.indexOf(entityType) === -1) {
          types.push(entityType)
        }
      })
      return types
    }, [])
    return result.length > 1 ? 'mixed' : result[0]
  }
}

exports.getMatrixDataType2 = function (array) {
  if (Array.isArray(array)) {
    // clone the object to avoid any side effects
    const _array = array.slice()
    let types = []
    for (let i = 0; i < _array.length; i++) {
      const vector = _array[i];
      for (let j = 0; j < vector.length; j++) {
        const entity = vector[j]
        let entityType = typeof entity

        // typeof null is always object..
        if (entity === null) {
          entityType = 'null'
        }
        if (types.indexOf(entityType) === -1) {
          types.push(entityType)
        }
      }
    }
    return types.length > 1 ? 'mixed' : types[0]
  }
}
