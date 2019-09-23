/**
 * @param {number[]} nums
 * @return {number[][]}
 */

var threeSum = function(nums) {
  var matchMap = new Map()
  var result = []
  for(var i = 0; i < nums.length; i++) {
    console.log('i', i)
    for(var j = i+1; j < nums.length; j++) {
      console.log(nums[j])
      console.log((matchMap.get(nums[j])||[]).includes(nums[i]))
      if((matchMap.get(nums[j])||[]).includes(nums[i])) {
        break;
      }
      for(var a = j+1; a < nums.length; a++) {
        if(nums[i]+nums[j]+nums[a] == 0) {
          result.push([nums[i], nums[j], nums[a]])
          matchMap.set(nums[i], (matchMap.get(nums[i])||[]).concat([nums[j], nums[a]]))
          matchMap.set(nums[j], (matchMap.get(nums[j])||[]).concat([nums[i], nums[a]]))
          matchMap.set(nums[a], (matchMap.get(nums[a])||[]).concat([nums[j], nums[i]]))
          break;
        }
      }
    }
  }
  console.log(result)
};

threeSum([-1, 0, 1, 2, -1, -4])