// Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.

// If target is not found in the array, return [-1, -1].

// You must write an algorithm with O(log n) runtime complexity.

// Example 1:

// Input: nums = [5,7,7,8,8,10], target = 8
// Output: [3,4]
// Example 2:

// Input: nums = [5,7,7,8,8,10], target = 6
// Output: [-1,-1]
// Example 3:

// Input: nums = [], target = 0
// Output: [-1,-1]

// Constraints:

// 0 <= nums.length <= 105
// -109 <= nums[i] <= 109
// nums is a non-decreasing array.
// -109 <= target <= 109

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

const binarySearch = (nums, left, right, target) => {
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const midValue = nums[mid];
    if (midValue === target) {
      return mid;
    } else if (midValue < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
};

const searchRange = function (nums, target) {
  if (nums.length < 1) return [-1, -1];
  const midPosition = binarySearch(nums, 0, nums.length - 1, target);
  if (midPosition === -1) return [-1, -1];
  let startPosition = midPosition;
  let endPosition = midPosition;
  let temp1, temp2;

  while (startPosition !== -1) {
    temp1 = startPosition;
    startPosition = binarySearch(nums, 0, startPosition - 1, target);
  }
  startPosition = temp1;

  while (endPosition !== -1) {
    temp2 = endPosition;
    endPosition = binarySearch(nums, endPosition + 1, nums.length - 1, target);
  }

  endPosition = temp2;
  return [startPosition, endPosition];
};
