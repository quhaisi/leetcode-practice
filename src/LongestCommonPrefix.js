/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix_bad = function(strs) {
  if(strs.length == 0) return ''
  if(strs.length == 1) return strs[0]
  var len = strs[0].length;
  var prefix = '';
  for(var j = 0; j < len; j++) {
    var _prefix = '';
    for(var i = 0, len2 = strs.length; i < len2; i++) {
      if(i == 0) {
        _prefix = strs[i].slice(0, j+1);
        continue;
      }
      if(strs[i].slice(0, j+1) != _prefix) {
        console.log('return:', prefix)
        return prefix;
      }
    }
    prefix = _prefix
  }
  console.log('end:', prefix)
  return prefix;
};

var longestCommonPrefix = function(strs) {
  if(strs.length == 0) return '';
  if(strs.length == 1) return strs[0];
  var prefix = strs[0];
  for(var i = 1, len = strs.length; i < len; i++) {
    while(strs[i].indexOf(prefix) != 0) {
      prefix = prefix.slice(0, prefix.length - 1)
      if(prefix.length == 0) return '';
    }
  }
  return prefix;
}

console.log(longestCommonPrefix(["flower","flow","flight"]))
console.log(longestCommonPrefix(["flower","flower","flowers"]))
console.log(longestCommonPrefix(["dog","racecar","car"]))
console.log(longestCommonPrefix(["a"]))
