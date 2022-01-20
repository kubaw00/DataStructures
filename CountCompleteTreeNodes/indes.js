// Given the root of a complete binary tree, return the number of the nodes in the tree.

// According to Wikipedia, every level, except possibly the last, is completely filled in a complete binary tree, and all nodes in the last level are as far left as possible. It can have between 1 and 2h nodes inclusive at the last level h.

// Design an algorithm that runs in less than O(n) time complexity.

// Example 1:

// Input: root = [1,2,3,4,5,6]
// Output: 6
// Example 2:

// Input: root = []
// Output: 0
// Example 3:

// Input: root = [1]
// Output: 1

// Constraints:

// The number of nodes in the tree is in the range [0, 5 * 104].
// 0 <= Node.val <= 5 * 104
// The tree is guaranteed to be complete.

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
 * @return {number}
 */
var countNodes = function (root) {
  if (!root) return 0;

  const height = getHeight(root);
  if (height === 0) return 1;

  const upperCount = Math.pow(2, height) - 1;

  let left = 0,
    right = upperCount;

  while (left < right) {
    let indexToFind = Math.ceil((left + right) / 2);
    if (nodeExists(indexToFind, height, root)) {
      left = indexToFind;
    } else {
      right = indexToFind - 1;
    }
  }

  return upperCount + left + 1;
};

function nodeExists(indexToFind, height, node) {
  let left = 0,
    right = Math.pow(2, height) - 1,
    count = 0;

  while (count < height) {
    let midOfNode = Math.ceil((left + right) / 2);
    if (indexToFind >= midOfNode) {
      node = node.right;
      left = midOfNode;
    } else {
      node = node.left;
      right = midOfNode - 1;
    }
    count++;
  }

  return node !== null;
}

function getHeight(node) {
  const count = 0;
  while (node.left !== null) {
    node = node.left;
    count++;
  }

  return count;
}
