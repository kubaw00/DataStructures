// Given an integer array nums and an integer k, return the kth largest element in the array.

// Note that it is the kth largest element in the sorted order, not the kth distinct element.

// Example 1:

// Input: nums = [3,2,1,5,6,4], k = 2
// Output: 5
// Example 2:

// Input: nums = [3,2,3,1,2,4,5,5,6], k = 4
// Output: 4

// Constraints:

// 1 <= k <= nums.length <= 104
// -104 <= nums[i] <= 104

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

const swap = function (array, a, b) {
  const temp = array[a];
  array[a] = array[b];
  array[b] = temp;
};

const partition = function (array, left, right) {
  const pivotElement = array[right];
  let partitionIdx = left;
  for (let j = left; j < right; j++) {
    if (array[j] < pivotElement) {
      swap(array, partitionIdx, j);
      partitionIdx++;
    }
  }
  swap(array, partitionIdx, right);
  return partitionIdx;
};

const quickSort = function (array, left, right) {
  if (left < right) {
    const partitionIdx = partiton(array, left, right);
    quickSort(array, left, partitionIdx - 1);
    quickSort(array, partitionIdx + 1, right);
  }
};

const findKthLargest = function (nums, k) {
  quickSort(nums, 0, nums.length - 1);
  return nums[nums.length - k];
};


/*--------------------------QUICKSELEECT--------------------------------------*/


const swap = function (array, a, b) {
  const temp = array[a];
  array[a] = array[b];
  array[b] = temp;
};

const partition = function (array, left, right) {
  const pivotElement = array[right];
  let partitionIdx = left;
  for (let j = left; j < right; j++) {
    if (array[j] < pivotElement) {
      swap(array, partitionIdx, j);
      partitionIdx++;
    }
  }
  swap(array, partitionIdx, right);
  return partitionIdx;
};


const quickSelect = function (array, left, right, indexToFind) {
  if (left < right) {
    const partitionIdx = partition(array, left, right);
    if(partitionIdx === indexToFind) {
      return array[partitionIdx];
    } else{
      if(partitionIdx < indexToFind) { 
        quickSelect(array, partitionIdx + 1, right, indexToFind);
      } else {    
        quickSelect(array, left, partitionIdx - 1, indexToFind);
      }
    }
  }
};

const findKthLargest = function (nums, k) {
  const indexToFind = nums.length - k
   return quickSelect(nums, 0, nums.length - 1, indexToFind);
  
};

