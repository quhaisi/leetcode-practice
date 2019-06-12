/**
 * @param {string} s
 * @return {boolean}
 */
var isValid_bad = function(s) {
  var map = [];
  for(var i = 0, len = s.length; i < len; i++) {
    if(s.charAt(i) == '(' || s.charAt(i) == '[' || s.charAt(i) == '{') {
      map.push(s.charAt(i))
    } else {
      switch(s.charAt(i)) {
        case ')':
          if(map[map.length-1] == '(') {
            map.pop()
          } else {
            return false;
          }
          break;
        case ']':
          if(map[map.length-1] == '[') {
            map.pop()
          } else {
            return false;
          }
          break;
        case '}':
          if(map[map.length-1] == '{') {
            map.pop()
          } else {
            return false;
          }
          break;
        default:
      }
    }
  }
  if(map.length == 0) {
    return true;
  } else {
    return false;
  }
};

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid_bad2 = function(s) {
  while(s.indexOf('()') > -1 || s.indexOf('[]') > -1 || s.indexOf('{}') > -1) {
    s = s.replace(/\(\)/g, '').replace(/\[\]/g, '').replace(/{}/g, '')
  }
  return s == ''
}

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  var map = [];
  var key = {
    ')': '(',
    ']': '[',
    '}': '{'
  }
  for(var i = 0, len = s.length; i < len; i++) {
    if(s.charAt(i) === '(' || s.charAt(i) === '[' || s.charAt(i) === '{') {
      map.push(s.charAt(i))
    } else {
      if(key[s.charAt(i)] !== map[map.length-1]) {
        return false;
      } else {
        map.pop()
      }
    }
  }
  return map.length === 0
};

console.log(isValid(''))
console.log(isValid('()'))
console.log(isValid('()[]{}'))
console.log(isValid('(]'))
console.log(isValid('([)]'))
console.log(isValid('{[]}'))
console.log(isValid('}'))


console.log(isValid('['))