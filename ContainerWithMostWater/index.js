// You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

// Find two lines that together with the x-axis form a container, such that the container contains the most water.

// Return the maximum amount of water a container can store.

// Notice that you may not slant the container.

// Input: height = [1,8,6,2,5,4,8,3,7]
// Output: 49
// Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.
// Example 2:

// Input: height = [1,1]
// Output: 1

// Constraints:

// n == height.length
// 2 <= n <= 105
// 0 <= height[i] <= 104

/**
 * @param {number[]} height
 * @return {number}
 */

// O(n^2)

const maxArea = (height) => {
  let maxarea = 0;
  for (let i = 0; i < height.length; i++) {
    for (let j = i + 1; j < height.length; j++) {
      const area = Math.min(height[i], height[j]) * (j - i);
      maxarea = Math.max(maxarea, area);
    }
  }

  return maxarea;
};
console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));

// O(n)

const MaxArea = (height) => {
  let maxAreas = 0,
    p1 = 0,
    p2 = height.length - 1;

  while (p1 < p2) {
    const area = Math.min(height[p1], height[p2]) * (p2 - p1);
    maxAreas = Math.max(area, maxAreas);
    if (height[p2] >= height[p1]) {
      p1++;
    } else {
      p2--;
    }
  }

  return maxAreas;
};

console.log(MaxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
