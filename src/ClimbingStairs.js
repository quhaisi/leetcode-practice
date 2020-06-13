/**
 * @param {number} n
 * @return {number}
 */
var temp = {};
var climbStairs = function (n) {
  if (n < 3) {
    return n;
  }
  temp[n] =
    (temp[n - 1] ? temp[n - 1] : climbStairs(n - 1)) +
    (temp[n - 2] ? temp[n - 2] : climbStairs(n - 2));
  return temp[n];
};

console.log(climbStairs(2));
console.log(climbStairs(3));
console.log(climbStairs(4));
