/**
 * @param {number[]} arr
 * @param {number} target
 * @return {number}
 */
var findBestValue = function (arr, target) {
  arr.sort((a, b) => a - b);
  let n = arr.length;
  let prefix = [0];
  for (let i = 1; i <= n; i++) {
    prefix.push(prefix[i - 1] + arr[i - 1]);
  }

  let r = arr[n - 1];
  let ans = 0,
    diff = target;
  for (let i = 1; i <= r; i++) {
    let index = arr.indexOf(i);
    console.log(index)
    if (index < 0) {
    } else {
      let cur = prefix[index] + (n - index) * i;
      if (Math.abs(cur - target) < diff) {
        ans = i;
        diff = Math.abs(cur - target);
      }
    }
  }
  return ans;
};
// TODO不会
console.log(findBestValue([1547, 83230, 57084, 93444, 70879], 71237));
// console.log(findBestValue([4, 9, 3], 10));
// console.log(findBestValue([2, 3, 5], 10));
// console.log(findBestValue([60864, 25176, 27249, 21296, 20204], 56803));
