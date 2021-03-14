function findTheLowerCaseWOrd(str) {
  var result = "";
  for (var i = 0; i < str.length; i++) {
    if (str.charAt(i) === str.charAt(i).toLowerCase()) {
      result += str.charAt(i);
    }
  }
  return result;
}

module.exports = findTheLowerCaseWOrd;
