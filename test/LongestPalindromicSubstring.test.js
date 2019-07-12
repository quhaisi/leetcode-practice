const longestPalindrome = require('../src/LongestPalindromicSubstring');

test('lengthOfLongestSubstring', () => {
  expect(longestPalindrome('babad')).toBe('bab');
  expect(longestPalindrome('cbbd')).toBe('bb');
  expect(longestPalindrome('a')).toBe('a');
  expect(longestPalindrome('')).toBe('');
  expect(longestPalindrome('acacaca')).toBe('acacaca');
  expect(longestPalindrome('ccc')).toBe('ccc');
  expect(longestPalindrome('ac')).toBe('a');
})