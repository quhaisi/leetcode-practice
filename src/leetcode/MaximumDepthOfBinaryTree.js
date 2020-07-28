// Maximum Depth of Binary Tree

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
  if (root === null) return 0;
  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
};


const maxDepth = (root) => { //广度优先搜索 BFS
  if (root == null) return 0;
  const queue = [root];
  let depth = 1;
  while (queue.length) {
    const levelNum = queue.length;          // 当前层的节点个数
    for (let i = 0; i < levelNum; i++) {    // 逐个让当前层的节点出列
      const cur = queue.shift();            // 当前出列的节点
      if (cur.left) queue.push(cur.left);
      if (cur.right) queue.push(cur.right); // 左右子节点入列
    }
    // 当前层所有节点出列，如果有下一层节点，则队列非空
    if (queue.length) depth++;
  }
  return depth;
};

// 作者：hyj8
// 链接：https://leetcode-cn.com/problems/maximum-depth-of-binary-tree/solution/liang-chong-jie-fa-di-gui-dfs-bfs-by-hyj8/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。