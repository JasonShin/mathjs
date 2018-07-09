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
        const entityType = typeof entity
        if (types.indexOf(entityType) === -1) {
          types.push(entityType)
        }
      })
      return types
    }, [])
    return result.length > 1 ? 'mixed' : result[0]
  }
}
