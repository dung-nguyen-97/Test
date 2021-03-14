function insertArrayInTheMiddle(arr1, arr2) {
  arr2.unshift(arr1[0]);
  arr2.push(arr1[1]);
  return arr2;
}
module.exports = insertArrayInTheMiddle;
