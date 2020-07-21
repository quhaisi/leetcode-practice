// Unique Binary Search Trees II
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function (n) {
  if (!n) {
    return [];
  }
  function genTrees(start, end) {
    if (start > end) {
      return [null];
    }
    let allTrees = [];
    for (let i = start; i <= end; i++) {
      let leftTrees = genTrees(start, i - 1);
      let rightTrees = genTrees(i + 1, end);
      for (let left of leftTrees) {
        for (let right of rightTrees) {
          allTrees.push(new TreeNode(i, left, right));
        }
      }
    }
    return allTrees;
  }
  return genTrees(1, n);
};
