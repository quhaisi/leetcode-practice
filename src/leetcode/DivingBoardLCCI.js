// Diving Board LCCI

/**
 * @param {number} shorter
 * @param {number} longer
 * @param {number} k
 * @return {number[]}
 */
var divingBoard = function (shorter, longer, k) {
  if (k === 0) return [];
  const sub = longer - shorter;
  const min = shorter * k;
  const result = new Set();
  for (let i = 0; i <= k; i++) {
    result.add(min + sub * i);
  }
  return result;
};
