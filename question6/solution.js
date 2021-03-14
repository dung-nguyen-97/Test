function moveAllUppercaseLetetrsToFirst(s) {
  var lowerCase = "";
  var upperCase = "";
  for (var i = 0; i < s.length; i++) {
    if (s.charAt(i) === s.charAt(i).toLowerCase()) {
      lowerCase += s.charAt(i);
    } else {
      upperCase += s.charAt(i);
    }
  }
  return upperCase.concat(lowerCase);
}

module.exports = moveAllUppercaseLetetrsToFirst;
