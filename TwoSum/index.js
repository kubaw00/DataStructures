// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Output: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// Time Complexity O(n^2)

const twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    const numberToFind = target - nums[i];
    for (let j = i + 1; j < nums.length; j++) {
      if (numberToFind === nums[j]) {
        return [i, j];
      }
    }
  }

  return null;
};

// Time Complexity O(n)

const TwoSum = (nums, target) => {
  const numsMap = {};
  for (let i = 0; i < nums.length; i++) {
    if (target - nums[i] in numsMap) {
      return [numsMap[target - nums[i]], i];
    } else {
      numsMap[nums[i]] = i;
    }
  }

  return null;
};

console.log(twoSum([2, 7, 11, 15], 9));
console.log(TwoSum([2, 7, 11, 15], 9));
