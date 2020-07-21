/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */
var numWaterBottles = function (numBottles, numExchange) {
  if (numBottles / numExchange < 1) return numBottles;
  return (
    numBottles -
    (numBottles % numExchange) +
    numWaterBottles(
      Math.floor(numBottles / numExchange) + (numBottles % numExchange),
      numExchange
    )
  );
};

/**
 * 
class Solution {
  public:
      int numWaterBottles(int a, int b) {
          int res = a;
          while (a >= b)
          {
              res += a/b;
              a = a/b+a%b;
          }
          return res;
      }
};
 */

console.log(numWaterBottles(9, 3));
console.log(numWaterBottles(15, 4));
