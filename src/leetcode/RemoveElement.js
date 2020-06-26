/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
  if(nums.length === 0) return 0;
  var len = 0;
  for(var i = 0; i < nums.length; i++) {
    if(nums[i] != val) {
      nums[len] = nums[i];
      len ++;
    }
  }
  console.log(len)
  console.log(nums)
  return len
};

removeElement([2,2,2,3], 3)
removeElement([3,2,2,3], 3)
removeElement([0,1,2,2,3,0,4,2], 2)