/**
 * @param {string} digits
 * @return {string[]}
 */
const numMapLetters = {
  '2': [ 'a', 'b', 'c' ],
  '3': [ 'd', 'e', 'f' ],
  '4': [ 'g', 'h', 'i' ],
  '5': [ 'j', 'k', 'l' ],
  '6': [ 'm', 'n', 'o' ],
  '7': [ 'p', 'q', 'r', 's' ],
  '8': [ 't', 'u', 'v' ],
  '9': [ 'w', 'x', 'y', 'z' ]
}
var combineLetters = function(left, right) {
  let arr = [];
  for(let i = 0; i < left.length; i++) {
    for(let j = 0; j < right.length; j++) {
      arr.push(left[i]+right[j])
    }
  }
  return arr
}
var letterCombinations = function(digits) {
  // 不加空字符串判断会出现内存溢出情况，相当于''.substring(0,0)无限递归
  if(digits === '') return []
  if(digits.length === 1) return numMapLetters[digits]
  let mid = digits.length/2;
  let left = digits.substring(0, mid);
  let right = digits.substring(mid);
  return combineLetters(letterCombinations(left),letterCombinations(right))
};
console.log(letterCombinations(''))