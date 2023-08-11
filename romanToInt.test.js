const romanToInt = require('./romanToInt');

test('Converts Roman numerals to integers', () => {
  expect(romanToInt('III')).toBe(3);
  expect(romanToInt('IV')).toBe(4);
  expect(romanToInt('IX')).toBe(9);
  expect(romanToInt('LVIII')).toBe(58);
  expect(romanToInt('MCMXCIV')).toBe(1994);
  expect(romanToInt('M')).toBe(1000);
  expect(romanToInt('MMMCMXCIX')).toBe(3999);
  expect(romanToInt('XLIX')).toBe(49);
});