// Two Sum II - Input array is sorted

/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
  let prev = 0;
  let last = numbers.length - 1;
  let arr = [];
  while (prev < last) {
    if (numbers[prev] + numbers[last] === target) {
      return [prev + 1, last + 1];
    } else if (numbers[prev] + numbers[last] > target) {
      last--;
    } else if (numbers[prev] + numbers[last] < target) {
      prev++;
    }
  }
};

console.log(twoSum([1, 2, 7, 11, 15], 9));
