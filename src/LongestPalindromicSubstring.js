/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  var major = 0, p = 0, q = 0;
  var maxSubStr = '';
  for(var i = 0; i < s.length; i++) {
    p = i;
    q = i + 1;
    let str = '';
    while(s.charAt(p) && s.charAt(q) && s.charAt(p) === s.charAt(q)) {
      str = s.charAt(p) + str;
      str = str + s.charAt(q);
      p--;
      q++;
      maxSubStr = str.length > maxSubStr.length ? str : maxSubStr
    }
    p = i;
    q = i + 1;
    str = s.charAt(i);
    while(s.charAt(--p) && s.charAt(q) && s.charAt(p) === s.charAt(q)) {
      str = s.charAt(p) + str;
      str = str + s.charAt(q);
      q++
      maxSubStr = str.length > maxSubStr.length ? str : maxSubStr
    }
    maxSubStr = str.length > maxSubStr.length ? str : maxSubStr
  }
  return maxSubStr;
};

module.exports = longestPalindrome;