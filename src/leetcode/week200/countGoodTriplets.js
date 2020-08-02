/**
 * @param {number[]} arr
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
var countGoodTriplets = function (arr, a, b, c) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    let j = i + 1;
    while (j < arr.length) {
      if (Math.abs(arr[i] - arr[j]) <= a) {
        let k = j + 1;
        while (k < arr.length) {
          if (
            Math.abs(arr[j] - arr[k]) <= b &&
            Math.abs(arr[i] - arr[k]) <= c
          ) {
            count++;
          }
          k++;
        }
      }
      j++;
    }
  }
  return count;
};

console.log(countGoodTriplets([3, 0, 1, 1, 9, 7], 7, 2, 3));
console.log(countGoodTriplets([1, 1, 2, 2, 3], 0, 0, 1));
