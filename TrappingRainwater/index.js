// Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.

// Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
// Output: 6
// Explanation: The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped.
// Example 2:

// Input: height = [4,2,0,3,2,5]
// Output: 9

// Constraints:

// n == height.length
// 1 <= n <= 2 * 104
// 0 <= height[i] <= 105

/**
 * @param {number[]} height
 * @return {number}
 */
const trap = function (height) {
  let total = 0,
    p = 0;
  while (p < height.length) {
    let maxL = 0,
      maxR = 0;
    for (let i = p; i < height.length; i++) {
      maxR = Math.max(height[i], maxR);
    }
    for (let j = p; j >= 0; j--) {
      maxL = Math.max(height[j], maxL);
    }

    let water = Math.min(maxL, maxR) - height[p];
    if (water > 0) {
      total += water;
    }
    p++;
  }
  return total;
};

const getTrappedRainWater = (height) => {
  let totalWater = 0;
  for (let p = 0; p < height.length; p++) {
    let leftP = p,
      rightP = p,
      maxLeft = 0,
      maxRight = 0;
    while (leftP >= 0) {
      maxLeft = Math.max(maxLeft, height[leftP]);
      leftP--;
    }
    while (rightP < height.length) {
      maxRight = Math.max(maxRight, height[rightP]);
      rightP++;
    }

    const water = Math.min(maxLeft, maxRight) - height[p];
    if (water >= 0) {
      totalWater += water;
    }
  }
  return totalWater;
};

const trapRainWater = (height) => {
  let total = 0;
  let p1 = 0,
    p2 = height.length - 1;
  let maxLeft = 0,
    maxRight = 0;

  while (p1 < p2) {
    if (height[p1] <= height[p2]) {
      const currentWater = maxLeft - height[p1];
      maxLeft = Math.max(height[p1], maxLeft);
      if (currentWater > 0) {
        total += currentWater;
      }
      p1++;
    } else {
      const currentWater = maxRight - height[p2];
      maxRight = Math.max(height[p2], maxRight);
      if (currentWater > 0) {
        total += currentWater;
      }
      p2--;
    }
  }
  return total;
};
console.log(trapRainWater([0, 1, 0, 2, 1, 0, 3, 1, 0, 1, 2]));
console.log(trap([0, 1, 0, 2, 1, 0, 3, 1, 0, 1, 2]));
console.log(getTrappedRainWater([0, 1, 0, 2, 1, 0, 3, 1, 0, 1, 2]));
