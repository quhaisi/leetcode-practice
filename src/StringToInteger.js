/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
  var sign = '+'
  while(str.length > 0 && str.charAt(0) === ' ') { // 去空格
    str = str.slice(1)
  }
  if(str.length > 0 && (str.charAt(0) === '-' || str.charAt(0) === '+')) { // 记录加减号
    sign = str.charAt(0)
    str = str.slice(1)
  }
  for(var i = 0; i < str.length; i++) {
    if(str.charAt(i).charCodeAt() >= 48 && str.charAt(i).charCodeAt() <= 57) {
      continue;
    } else {
      str = str.slice(0, i)
      break;
    }
  }
  if(str.length === 0) return 0
  var num = parseInt(sign + str)
  if(num > Math.pow(2, 31) - 1) num = Math.pow(2, 31) - 1
  if(num < Math.pow(-2, 31)) num = Math.pow(-2, 31)
  return num
};

module.exports = myAtoi;