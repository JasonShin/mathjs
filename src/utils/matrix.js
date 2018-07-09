const isArrayMatrix = require('./collection/isArrayMatrix.js')

/**
 * Check the datatype of a given object
 * @param object
 * @return string
 */
exports.getMatrixDataType = function (object) {
  if (isArrayMatrix(object)) {
    // clone the object to avoid any side effects
    const _object = object.slice()
    // Checking the array type
    const result = _object.reduce((types, vector) => {
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
