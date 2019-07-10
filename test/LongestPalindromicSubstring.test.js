const longestPalindrome = require('../src/LongestPalindromicSubstring');

test('lengthOfLongestSubstring', () => {
  expect(longestPalindrome('babad')).toBe('bab');
})