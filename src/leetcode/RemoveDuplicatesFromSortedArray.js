/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates_bad = function(nums) {
  var len = nums.length
  for(var j = 1; j < nums.length; j++) {
    for(var i = 0; i < j; i++) {
      if(nums[j] === nums[i]) {
        delete nums[i]
        len--
      }
    }
  }
  nums.sort(function(x, y) {
    return x-y
  })
  return len;
};

var removeDuplicates = function(nums) {
  if(nums.length === 0) return 0;
  var i = 0;
  for(j = 1; j < nums.length; j++) {
    if(nums[j] !== nums[i]) {
      i++;
      nums[i] = nums[j];
    }
  }
  return i+1
}

removeDuplicates([1,1,2])
console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]))
console.log(removeDuplicates([-3,-1,0,0,0,3,3]))