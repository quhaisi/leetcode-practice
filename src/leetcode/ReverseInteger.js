/**
 * @param {number} x
 * @return {number}
 */
var reverse_bad = function(x) {
  if(x > Math.pow(2, 31) - 1 || x < Math.pow(-2, 31)) return 0
  var a = true,
      result = 0;
  a = x > 0
  if(a) {
      result = parseInt(x.toString().split('').reverse().join(''))
  } else {
      result = 0 - parseInt(x.toString().split('').reverse().join(''))
  }
  result = result > Math.pow(2, 31) - 1 || result < Math.pow(-2, 31) ? 0 : result
  return result
};

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  // if(x > Math.pow(2, 31) - 1 || x < Math.pow(-2, 31)) return 0
  var rev = 0;
  var MAX_VALUE = Math.pow(2, 31) - 1;
  var MIN_VALUE = Math.pow(-2, 31);
  while (x != 0) {
      var pop = x % 10;
      x = parseInt(x/10);
      if (rev > MAX_VALUE/10 || (rev == MAX_VALUE/10 && pop > 7)) return 0;
      if (rev < MIN_VALUE/10 || (rev == MIN_VALUE/10 && pop < -8)) return 0;
      rev = rev*10+pop
  }
  return rev
};