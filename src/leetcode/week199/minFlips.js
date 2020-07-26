/**
 * @param {string} target
 * @return {number}
 */
var minFlips = function (target) {
  // 超时
  let result = new Array(target.length).fill(0);
  let count = 0;
  for (let i = 0; i < target.length; i++) {
    if (result[i] != target[i]) {
      for (let j = i; j < target.length; j++) {
        result[j] = (result[j] + 1) % 2;
      }
      count++;
    }
  }
  return count;
};

var minFlips = function (target) {
  let flag = 0;
  let count = 0;
  for (let i = 0; i < target.length; i++) {
    if (target[i] != flag) {
      count++;
      flag = (flag + 1) % 2;
    }
  }
  return count;
};

console.log(minFlips("10111"));
