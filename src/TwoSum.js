/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let length = nums.length
    let result = []
    for(let i = 0; i < length; i++) {
        for(let j = i + 1; j < length; j++) {
            if(nums[i] + nums[j] == target) {
                result = [i, j]
            }
        }
    }
    return result
};

var twoSum = function(nums, target) {
    let hashMap = new Map();
    let loop = 0;
    while(loop < nums.length) {
        if(hashMap.get(target - nums[loop]) !== undefined) {
            return [hashMap.get(target - nums[loop]), loop]
        }
        hashMap.set(nums[loop], loop)
        loop++
    }
    return arr
}
/**
 * 使用map的性能并没有使用object的好
 */
var twoSum = function(nums, target) {
    let map = {};//key数字 value下标
    let loop = 0;//循环次数
    let dis;//目标与当前值的差
    while(loop < nums.length){
        dis = target - nums[loop];
        if(map[dis] != undefined){
            return [map[dis], loop];
        }
        map[nums[loop]] = loop;
        loop++;
    }
    return;
};

console.log(twoSum([2, 7, 11, 15], 9))