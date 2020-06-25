/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
  const len = s.length;
  const dp = [true];
  const set = new Set(wordDict);
  for (let i = 1; i <= len; i++) {
    for (let j = 0; j < i; j++) {
      if (dp[j] && set.has(s.substr(j, i - j))) {
        dp[i] = true;
        break;
      }
    }
  }
  return !!dp[len];
};

console.log(wordBreak("applepenapple", ["apple", "pen", "pens"]));
console.log(wordBreak("catsandog", ["cats", "dog", "sand", "and", "cat"]));
