/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function (s, indices) {
  let result = "".padStart(s.length, "0");
  for (let i = 0; i < indices.length; i++) {
    // result[indices[i]] = s[i] 字符串无法直接修改
    let temp = result.split('')
    temp[indices[i]] = s[i]
    result = temp.join('')
  }
  return result;
};

console.log(restoreString("codeleet", [4, 5, 6, 7, 0, 2, 1, 3]));
console.log(restoreString("aiohn", [3, 1, 4, 2, 0]));
