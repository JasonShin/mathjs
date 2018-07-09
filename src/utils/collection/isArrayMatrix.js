/**
 * Checks if the given object is an array
 * @param object
 * @returns {boolean}
 */
module.exports = function (object) {
  if (Array.isArray(object) && object.length > 0) {
    // Getting unique row lengths from the Array object
    const rowLengths = object
      .map(row => row.length)
      .filter((v, i, a) => a.indexOf(v) === i)
      .filter((v) => v !== undefined && v !== null)
    return rowLengths.length === 1
  }
  // Object is not an array or contains < 1 rows
  return false
}
