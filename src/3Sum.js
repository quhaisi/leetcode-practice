/**
 * @param {number[]} nums
 * @return {number[][]}
 */

var threeSum_Time_Limit_Exceeded = function(nums) {
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

var threeSum = function(nums) {
  var arr = [];
  nums.sort((a, b) => {
    return a - b
  })
  for(var i = 0; i < nums.length; i++) {
    while(nums[i] === nums[i-1]) i++

    let l = i + 1
    let r = nums.length - 1
    while(l < r) {
      if(nums[l]+nums[r]+nums[i] === 0) {
        arr.push([nums[l], nums[r], nums[i]])
        l++;
        r--;
        while(nums[l] === nums[l-1]) l++
        while(nums[r] === nums[r+1]) r--
      } else if(nums[l]+nums[r]+nums[i] > 0) {
        r--
        while(nums[r] === nums[r+1]) r--
      } else {
        l++;
        while(nums[l] === nums[l-1]) l++
      }
    }
  }
  console.log(arr)
  return arr
}

module.exports = threeSum;