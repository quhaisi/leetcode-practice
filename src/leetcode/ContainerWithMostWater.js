/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea_bruteForce= function(height) {
  var area = 0;
  for(var i = 0; i < height.length; i++) {
    for(var j = i + 1; j < height.length; j++) {
      area = Math.max(Math.min(height[j], height[i])*(j-i), area)
    }
  }
  return area;
};

var maxArea= function(height) {
  var area = 0;
  var start = 0;
  var end = height.length-1;
  while(start < end) {
    area = Math.max(area, Math.min(height[start], height[end]) * (end - start))
    if(height[start] > height[end]){
      end--
    } else {
      start++
    }
  }
  return area;
};

module.exports = maxArea;