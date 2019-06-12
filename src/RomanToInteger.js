/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  var romanMapInt = {
    'I' : 1,
    'V' : 5,
    'X' : 10,
    'L' : 50,
    'C' : 100,
    'D' : 500,
    'M' : 1000
  };
  var result = 0;
  var len = s.length;
  for (var i = 0; i < len - 1; i++) {
    if(romanMapInt[s.charAt(i)] < romanMapInt[s.charAt(i+1)]) {
      result -= romanMapInt[s.charAt(i)]
    } else {
      result += romanMapInt[s.charAt(i)]
    }
  }
  result += romanMapInt[s.charAt(len-1)]
  return result
};

romanToInt('III')
romanToInt('IV')
romanToInt('IX')
romanToInt('LVIII')
romanToInt('MCMXCIV')