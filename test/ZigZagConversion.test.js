const convert = require('../src/ZigZagConversion');

test('ZigZagConversion', () => {
  expect(convert('PAYPALISHIRING', 3)).toBe('PAHNAPLSIIGYIR');
  expect(convert('PAYPALISHIRING', 4)).toBe('PINALSIGYAHRPI');
  expect(convert('P', 1)).toBe('P');
  expect(convert('PA', 2)).toBe('PA');
  expect(convert('PAC', 2)).toBe('PCA');
  expect(convert('PAC', 3)).toBe('PAC');
})