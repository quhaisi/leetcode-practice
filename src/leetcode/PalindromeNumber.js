/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome_bad = function(x) { // 问题中不允许转换成字符串操作
    return x.toString().split('').reverse().join('') == x
};

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  if(x<0 || (x%10 == 0 && x != 0)) return false
  var rec = 0;
  while (x > rec) {
      rec = rec*10+x%10;
      x = parseInt(x/10)
  }
  return x == rec || x == parseInt(rec/10)
};