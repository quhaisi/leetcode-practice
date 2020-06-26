/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOneError = function(digits) {
  // 数字超出js能处理的范围
  return (digits.join('')- -1).toString().split('')
};

var plusOneBad = function(digits) {
  let reverseArr = digits.reverse()
  var plusFlag = 1;
  for(let i = 0; i < reverseArr.length; i++) {
    reverseArr[i] = (reverseArr[i] + plusFlag) % 10
    plusFlag = parseInt((reverseArr[i] + plusFlag) / 10)
  }
  if(plusFlag === 1) {
    reverseArr.push(1)
  }
  return reverseArr.reverse()
}

console.log(plusOne([6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]))
console.log(plusOne([9,9,9,9]))
