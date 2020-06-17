/**
 * @param {number[]} A
 * @return {number}
 */
var maxScoreSightseeingPair = function (A) {
  // 枚举法
  let max = Number.NEGATIVE_INFINITY;
  let preMax = Number.NEGATIVE_INFINITY;
  for (let j = 1; j < A.length; j++) {
    let temp = A[j - 1] + j - 1;
    if (preMax < temp) {
      preMax = temp;
    }
    max = max < preMax + A[j] - j ? preMax + A[j] - j : max;
  }
  return max;
};

console.log(maxScoreSightseeingPair([8, 1, 5, 2, 6]));
console.log(maxScoreSightseeingPair([1, 2]));
