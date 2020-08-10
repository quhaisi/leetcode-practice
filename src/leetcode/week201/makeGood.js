/**
 * @param {string} s
 * @return {string}
 */
var makeGood = function (s) {
  if (s === "") return "";
  if (s.length === 1) return s;
  let ok = [s[0]];
  for (let i = 1; i < s.length; i++) {
    if (
      ok.length !== 0 &&
      Math.abs(s[i].charCodeAt() - ok[ok.length - 1].charCodeAt()) === 32
    ) {
      ok.pop();
    } else {
      ok.push(s[i]);
    }
  }
  return ok.join("");
};

console.log(makeGood("leEeetcode"));
console.log(makeGood("abBAcC"));
