/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr_bad = function(haystack, needle) {
  if(needle.length === 0 || needle === haystack ) return 0;
  if(needle.length > haystack.length) return -1;
  for(var i = 0; i < haystack.length; i++) {
    for(var j = 0; j < needle.length; j++) {
      if(haystack[i+j] !== needle[j]) {
        break;
      } else if (j === needle.length-1) {
        return i;
      }
    }
  }
  return -1;
};

var strStr = function(haystack, needle) {
  if(needle.length === 0) return 0;
  return haystack.match(needle) ? haystack.match(needle).index : -1;
};

/**后记
 * leetcode上有很多用原生方法解决问题
 * 我觉得这样违背了学习算法的原则
 * 目前我想到的只有这种办法
 * 虽然时间和空间都不是最佳的
 */

console.log(strStr('hello', 'll'))
console.log(strStr('aaaaa', 'bba'))
console.log(strStr('aaaaa', ''))
console.log(strStr('', 'aaaaa'))