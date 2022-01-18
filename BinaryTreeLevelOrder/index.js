// Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).

// Example 1:

// Input: root = [3,9,20,null,null,15,7]
// Output: [[3],[9,20],[15,7]]
// Example 2:

// Input: root = [1]
// Output: [[1]]
// Example 3:

// Input: root = []
// Output: []

// Constraints:

// The number of nodes in the tree is in the range [0, 2000].
// -1000 <= Node.val <= 1000

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */

var levelOrder = function (root) {
  if (!root) return [];
  const res = [];
  const q = [root];

  while (q.length !== 0) {
    let length = q.length,
      count = 0;
    const currentLevelValues = [];

    while (count < length) {
      const currentNode = q.shift();
      currentLevelValues.push(currentNode.val);
      if (currentNode.left) q.push(currentNode.left);
      if (currentNode.right) q.push(currentNode.right);
      count++;
    }
    res.push(currentLevelValues);
  }

  return res;
};
