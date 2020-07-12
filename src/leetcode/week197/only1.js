/**
 * @param {string} s
 * @return {number}
 */
var numSub = function (s) {
  let count = 0;
  const modNumber = 1000000000 + 7;
  for (let i = 0; i < s.length; i++) {
    let subCount = 0;
    while (s[i] === "1") {
      subCount++;
      i++;
      count = count + subCount;
    }
  }
  return count % modNumber;
};

console.log(numSub("0110111"));
console.log(numSub("101"));
console.log(numSub("111111"));
