/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive = function(arr, k) {
  let queshi = 1
  let arrIndex = 0
  let arrC = []
  for(let i = 1; i <= k+arr.length; i++) {
    if(arr[arrIndex] !== i) {
      arrC[queshi] = i
      queshi++
    } else {
      arrIndex++
    }
  }
  return arrC[k]
};

console.log(findKthPositive([2,3,4,7,11], 5))
console.log(findKthPositive([1,2,3,4], 2))