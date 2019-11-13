/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
  nums.sort((a, b) => {
    return a - b
  })
  var arr = [];
  for(var i = 0; i < nums.length; i++) {
    while(nums[i] === nums[i-1]) i++
    arr = arr.concat(threeSum(nums.slice(i+1), nums[i], target))
  }
  return arr
};

var threeSum = function(nums, item, target) {
  var iTarget = target - item
  var arr = [];
  for(var i = 0; i < nums.length; i++) {
    while(nums[i] === nums[i-1]) i++

    let l = i + 1
    let r = nums.length - 1
    while(l < r) {
      if(nums[l]+nums[r]+nums[i] === iTarget) {
        arr.push([nums[l], nums[r], nums[i], item])
        l++;
        r--;
        while(nums[l] === nums[l-1]) l++
        while(nums[r] === nums[r+1]) r--
      } else if(nums[l]+nums[r]+nums[i] > iTarget) {
        r--
        while(nums[r] === nums[r+1]) r--
      } else {
        l++;
        while(nums[l] === nums[l-1]) l++
      }
    }
  }
  return arr
}

console.log(fourSum( [1, 0, -1, 0, -2, 2], 0))
console.log(fourSum([-1,-5,-5,-3,2,5,0,4], -7)) // The solution set must not contain duplicate quadruplets.
console.log(fourSum([-1,-1,-1,3], 0)) // The solution set must not contain duplicate quadruplets.