/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  let front = '('.repeat(n)
  let end = ')'.repeat(n)
  return front.concat(end);
};

console.log(generateParenthesis(3));
