/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray_bad = function(nums) {
  var sum = nums[0];
  for(var i = 0; i < nums.length; i++) {
    var subSum = 0;
    for(var j = i; j < nums.length; j++) {
      subSum+=nums[j];
      if(subSum > sum) sum = subSum;
    }
  }
  return sum;
};

var maxSubArray = function(nums) {
  let maxSum = nums[0];
  let partialSum = 0;

  for (let item of nums) { 
    partialSum += item; 
    maxSum = Math.max(maxSum, partialSum); 
    if (partialSum < 0) {
        partialSum = 0; 
    }
  }
  return maxSum;
}

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))
console.log(maxSubArray([-2,-3,-1,-5]))