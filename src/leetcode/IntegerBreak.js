// Integer Break

/**
 * @param {number} n
 * @return {number}
 */
var integerBreak = function (n) {
  let dp = [0, 0];
  for (let i = 2; i <= n; i++) {
    let curMax = 0;
    for (let j = 1; j < i; j++) {
      curMax = Math.max(curMax, j * (i - j), j * dp[i - j]);
    }
    dp[i] = curMax;
  }
  return dp[n];
};

console.log(integerBreak(2));
console.log(integerBreak(10));
console.log(integerBreak(3));
console.log(integerBreak(1));
