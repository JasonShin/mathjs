'use strict'

/**
 * Check the datatype of a given object
 * @param object
 * @return string
 */
function getMatrixDataType (object) {
  if (Array.isArray(object) && object.length > 0) {
    // clone the object to avoid any side effects
    const _object = object.slice()
    // Checking the array type
    const result = _object.reduce((types, vector) => {
      // Check length
      vector.forEach((entity) => {
        const entityType = typeof entity
        if (types.indexOf(entityType) === -1) {
          types.push(entityType)
        }
      })
      return types
    }, [])
    console.log(result)
  } else {
    // do something
  }
}

getMatrixDataType(
  [ [1, 2, 3], [4, 5, 6], ['string', 8, 9] ]
)

getMatrixDataType(
  []
)

getMatrixDataType(
  [1, 2]
)
