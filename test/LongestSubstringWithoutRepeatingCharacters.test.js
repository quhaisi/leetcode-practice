const lengthOfLongestSubstring = require('../src/LongestSubstringWithoutRepeatingCharacters');

test('lengthOfLongestSubstring', () => {
  expect(lengthOfLongestSubstring('abcabcbb')).toBe(3);
  expect(lengthOfLongestSubstring('bbbbb')).toBe(1);
  expect(lengthOfLongestSubstring('pwwkew')).toBe(3);
  expect(lengthOfLongestSubstring('avsdf')).toBe(5);
  expect(lengthOfLongestSubstring('q')).toBe(1);
  expect(lengthOfLongestSubstring('aab')).toBe(2);
  expect(lengthOfLongestSubstring('dvdf')).toBe(3);
})