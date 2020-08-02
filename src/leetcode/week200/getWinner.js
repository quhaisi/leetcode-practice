/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var getWinner = function (arr, k) { // 多次超时
  if (k >= arr.length) {
    return Math.max(...arr);
  }
  while (true) {
    let max = arr[0];
    for (let i = 1; i <= k; i++) {
      max = Math.max(arr[i], max);
    }
    if (max === arr[0] || max === arr[1]) {
      return max;
    } else {
      arr.push(arr.shift());
    }
  }
};

/**
 * class Solution {
public:
    int getWinner(vector<int>& arr, int k) {
        queue<int> q;
        if(k >= arr.size()) return *max_element(arr.begin(), arr.end());
        for(int i = 1; i < (int)arr.size(); i += 1) q.push(arr[i]);
        int m = arr[0], sk = 0;
        for(int i = 0;; i += 1){
            int u = q.front();
            q.pop();
            if(u > m){
                q.push(m);
                m = u;
                sk = 1;
            }
            else{
                q.push(u);
                sk += 1;
            }
            if(sk == k) break;
        }
        return m;
    }
};
 */

// console.log(getWinner([3, 2, 1], 10));
// console.log(getWinner([1, 9, 8, 2, 3, 7, 6, 4, 5], 7));
// console.log(getWinner([1, 11, 22, 33, 44, 55, 66, 77, 88, 99], 1000000000));
// console.log(getWinner([2,1,3,5,4,6,7], 2));
console.log(getWinner([1,25,35,42,68,70], 6));
