// Minimum Size Subarray Sum

/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (s, nums) {
  let index = 0,
    len = Infinity,
    sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    while (sum >= s) {
      len = i - index + 1 < len ? i - index + 1 : len;
      sum -= nums[index];
      index++;
    }
  }
  return len === Infinity ? 0 : len;
};

console.log(minSubArrayLen(7, [1]));
