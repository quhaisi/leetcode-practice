// Minimum Path Sum

/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
  if (!grid || grid.length === 0 || grid[0].length === 0) {
    return 0;
  }
  const row = grid.length;
  const col = grid[0].length;
  // [node]
  /**
   *  new Array(row).fill(new Array(col).fill(0));
   *  当一个对象被传递给 fill方法的时候, 填充数组的是这个对象的引用。
   *  这就会导致一行数组被修改，其他行数组也会一起改变
   */

  /**
   *  new Array(row).map((item) => new Array(col).fill(0)); 
   *  1. new Array(row)会返回row个空值元素的数组（empty item）
   *  2. 函数map的回调函数只会在有值的元素上被调用
   *  综上所述：如果不使用fill函数，则会导致map函数不执行
   */
  const dp = new Array(row).fill([]).map((item) => new Array(col).fill(0));
  dp[0][0] = grid[0][0];
  for (let i = 1; i < col; i++) {
    dp[0][i] = dp[0][i - 1] + grid[0][i];
  }
  for (let i = 1; i < row; i++) {
    dp[i][0] = dp[i - 1][0] + grid[i][0];
  }
  for (let i = 1; i < row; i++) {
    for (let j = 1; j < col; j++) {
      dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1]) + grid[i][j];
    }
  }
  return dp[row - 1][col - 1];
};

console.log(
  minPathSum([
    [7, 4, 8, 7, 9, 3, 7, 5, 0],
    [1, 8, 2, 2, 7, 1, 4, 5, 7],
    [4, 6, 4, 7, 7, 4, 8, 2, 1],
    [1, 9, 6, 9, 8, 2, 9, 7, 2],
    [5, 5, 7, 5, 8, 7, 9, 1, 4],
    [0, 7, 9, 9, 1, 5, 3, 9, 4],
  ])
);
// console.log(
//   minPathSum([
//     [1,3,1],
//     [1,5,1],
//     [4,2,1]
//   ])
// );
