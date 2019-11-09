/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest_bad = function(nums, target) {
  nums.sort((a,b)=>a-b)
  let closest
  for(var i = 0; i<nums.length;i++) {
    while(nums[i] === nums[i-1]) i++
    let l = i +1
    let r = nums.length-1
    while(r>l) {
      if(nums[i]+nums[r]+nums[l] === target) {
        return 0
      } else if(nums[i]+nums[r]+nums[l] > target) {
        while(nums[i]+nums[r]+nums[l] > target) {
          closest = nums[i]+nums[r]+nums[l]
          r--
          if(r===l) break
        }
        if(r===l) break
        if(target - nums[i]+nums[r]+nums[l] < closest - target) {
          closest = nums[i]+nums[r]+nums[l]
        }
      } else {
        while(nums[i]+nums[r]+nums[l] < target && r>l) {
          closest = nums[i]+nums[r]+nums[l]
          l++
          if(r===l) break
        }
        if(r===l) break
        if(nums[i]+nums[r]+nums[l] - target < target - closest) {
          closest = nums[i]+nums[r]+nums[l]
        }
      }
    }
  }
  return closest
};

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
  nums.sort((a,b)=>a-b)
  let closest = Infinity,
      sum;
  for(var i = 0; i<nums.length;i++) {
    while(nums[i] === nums[i-1]) i++
    let l = i + 1,
        r = nums.length - 1;
    while(r>l) {
      sum = nums[i] + nums[r] + nums[l]
      if(Math.abs(target-closest) > Math.abs(target-sum)) {
        closest = sum
      }
      if(sum > target) {
        r--
      } else if (sum < target) {
        l++
      } else {
        return closest
      }
    }
  }
  return closest
};

console.log(threeSumClosest([-1, 2, 1, -4], 1))