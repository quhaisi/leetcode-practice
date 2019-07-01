/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
  var item = "1";
  for(var i = 1; i < n; i++) {
    var str = ''
    var count = 0;
    for(var j = 0; j < item.length; j++) {
      count++
      if(item.charAt(j) !== item.charAt(j+1)) {
        str = str + count + item.charAt(j);
        count = 0
      }
    }
    item = str
  }
  return item;
};

console.log(countAndSay(1));
console.log(countAndSay(2));
console.log(countAndSay(3));
console.log(countAndSay(4));
console.log(countAndSay(5));
console.log(countAndSay(6));