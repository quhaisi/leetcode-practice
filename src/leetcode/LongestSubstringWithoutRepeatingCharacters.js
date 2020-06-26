/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring_error = function(s) {
  var obj = { len: 0 },
      maxLen = 0;
  for(var i = 0; i < s.length; i++) {
    if(obj[s.charAt(i)]) { // 重计时机不对
      console.log('reset')
      maxLen = maxLen > obj.len ? maxLen : obj.len
      obj = {len: 0} // 重复被排除在外了，应该从这个字符重新计数
    } else {
      console.log(obj.len)
      obj[s.charAt(i)] = true;
      obj.len = obj.len +1
      console.log('obj.len ' + obj.len + ' ' + s.charAt(i))
    }
  }
  return maxLen = maxLen > obj.len ? maxLen : obj.len
};

var lengthOfLongestSubstring_bad = function(s) {
  var obj = { len: 0 },
      maxLen = 0;
  for(var i = 0; i < s.length; i++) {
    for(var j = i; j < s.length; j++) {
      if(obj[s.charAt(j)]) {
        maxLen = maxLen > obj.len ? maxLen : obj.len;
        obj = { len: 0 };
        break;
      } else {
        obj[s.charAt(j)] = true;
        obj.len++;
      }
    }
  }
  return maxLen = maxLen > obj.len ? maxLen : obj.len
};

var lengthOfLongestSubstring = function(s) {
  var p = 0, // 前指针
    q = 0, // 后指针
    len = s.length,
    str = '',
    maxLen = 0;
  while(p < len && q < len) {
    if(s.slice(p,q).indexOf(s.charAt(q)) === -1) {
      str+=s.charAt(q++);
      maxLen = maxLen > q - p ? maxLen : q - p;
    } else {
      str.substr(0,1);
      p++;
    }
  }
  return maxLen;
}

module.exports = lengthOfLongestSubstring;
