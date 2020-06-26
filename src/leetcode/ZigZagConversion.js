/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert_self = function(s, numRows) {
  if(numRows === 1) return s;
  var arr = [], index = 0, add = true;
  for(var i = 0; i < s.length; i++) {
    if(!arr[index]) {
      arr[index] = s.charAt(i);
    } else {
      arr[index] += s.charAt(i);
    }
    if(add) {
      if(index < numRows-1) {
        index++;
      } else {
        add = false;
        index--;
      }
    } else {
      if(index > 0) {
        index--;
      } else {
        add = true;
        index++;
      }
    }
  }
  return arr.reduce((a,b)=> {
    return a+b;
  })
};

var convert = function(s, numRows) {
  if(numRows === 1) return s;
  var result = '', len = s.length, cycleLen = 2 * numRows - 2;
  for(var i = 0; i < numRows; i++) {
    for(var j = 0; i + j < len; j += cycleLen) {
      result += s.charAt(i + j);
      if(i != 0 && i != numRows - 1 && j + cycleLen - i < len) {
        result += s.charAt(j + cycleLen - i);
      }
    }
  }
  return result;
};

module.exports = convert;