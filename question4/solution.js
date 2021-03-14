function canGetNestedInside(arr1, arr2) {
  for (var i = 0; i < arr1.length; i++) {
    for (y = 0; y < arr2.length; y++) {
      if (arr2[y] == arr1[i]) {
        return false;
      }
    }
  }
  return true;
}

module.exports = canGetNestedInside;
