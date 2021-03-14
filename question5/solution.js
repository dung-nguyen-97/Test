function convertToArray(obj) {
  var result = [];
  for (var key in obj) {
    result.push([key, obj[key]]);
  }
  return result;
}
module.exports = convertToArray;
