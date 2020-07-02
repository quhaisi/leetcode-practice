// Kth Smallest Element in a Sorted Matrix
/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (matrix, k) {
  return matrix
    .reduce((prev, curr) => {
      return prev.concat(curr);
    }, [])
    .sort((a, b) => a - b)[k-1];
};

// TODO 归并排序
// TODO 二分查找
