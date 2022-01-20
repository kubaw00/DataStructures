// Given the root of a binary tree, imagine yourself standing on the right side of it, return the values of the nodes you can see ordered from top to bottom.

// Example 1:

// Input: root = [1,2,3,null,5,null,4]
// Output: [1,3,4]
// Example 2:

// Input: root = [1,null,3]
// Output: [1,3]
// Example 3:

// Input: root = []
// Output: []

// Constraints:

// The number of nodes in the tree is in the range [0, 100].
// -100 <= Node.val <= 100
//
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
 * @return {number[]}
 */

/*--------------------Breath First Search version ------------------*/

var rightSideView = function (root) {
  if (!root) return [];

  const queue = [root];
  const res = [];

  while (queue.length) {
    let counter = 0;
    let currentNode;
    let length = queue.length;

    while (counter < length) {
      currentNode = queue.shift();

      if (currentNode.left) queue.push(currentNode.left);
      if (currentNode.right) queue.push(currentNode.right);
      counter++;
    }
    res.push(currentNode.val);
  }
  return res;
};

/*--------------------Depth First Search version ------------------*/
function dfs(node, currentLevel, res) {
  if (!node) return;
  if (currentLevel >= res.length) {
    res.push(node.val);
  }
  if (node.right) {
    dfs(node.right, currentLevel + 1, res);
  }

  if (node.left) {
    dfs(node.left, currentLevel + 1, res);
  }
}

var rightSideView = function (root) {
  const res = [];
  dfs(root, 0, res);
  return res;
};
