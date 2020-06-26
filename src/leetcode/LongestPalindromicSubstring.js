/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome_bad = function(s) {
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

var longestPalindrome = function(s) { // leetcode Solution Approach 4: Expand Around Center
  if(s === null || s.length === 0) return '';
  var start = 0, end = 0;
  for(var i = 0; i < s.length; i++) {
    var len1 = expendAroundCenter(s, i, i);
    var len2 = expendAroundCenter(s, i, i + 1);
    var len = Math.max(len1, len2);
    if(len > end - start + 1 ) {
      start = i - parseInt((len - 1) / 2);
      end = i + parseInt(len / 2);
    }
  }
  return s.substring(start, end + 1);
};

var expendAroundCenter = function(s, left, right) {
  var L = left, R = right;
  while (L >= 0 && R < s.length && s.charAt(L) === s.charAt(R)) {
    L--;
    R++;
  }
  return R - L - 1;
}

module.exports = longestPalindrome;