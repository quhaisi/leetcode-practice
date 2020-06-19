/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  s = s.replace(/[^0-9a-zA-Z]/g, '').toLowerCase()
  const middle = Math.floor(s.length/2)
  const prev = s.substring(0, middle)
  const tail = s.substring(middle, s.length).split("").reverse().join("")
  return tail.indexOf(prev) === 0
};

// console.log(isPalindrome("A man, a plan, a canal: Panama"))
// console.log(isPalindrome("race a car"))
console.log(isPalindrome("0P"))