function sumOfAllDigitsIsOddOrsumOfAllDigitsIsEven(num) {
    var result=0;
    var str = String(num);
    for (var i = 0; i < str.length; i++) {
        result+= parseInt(str.charAt(i))
    }
    if(result%2>0) return "sumOfAllDigitsIsOdd";
    else {
    return 'sumOfAllDigitsIsEven'
  
    }
  }
  sumOfAllDigitsIsOddOrsumOfAllDigitsIsEven(1)
module.exports = sumOfAllDigitsIsOddOrsumOfAllDigitsIsEven;