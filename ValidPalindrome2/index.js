// Given a string s, return true if the s can be palindrome after deleting at most one character from it.

// Example 1:

// Input: s = "aba"
// Output: true
// Example 2:

// Input: s = "abca"
// Output: true
// Explanation: You could delete the character 'c'.
// Example 3:

// Input: s = "abc"
// Output: false

// Constraints:

// 1 <= s.length <= 105
// s consists of lowercase English letters.

/**
 * @param {string} s
 * @return {boolean}
 */

const validSubPolindrome = (s, left, right) => {
  while (left < right) {
    if (s[left] !== s[right]) {
      return false;
    } else {
      left++;
      right--;
    }
  }
  return true;
};

const validPalindrome = (s) => {
  const newStr = s.replaceAll(/[^A-Za-z0-9]/g, '').toLowerCase();
  let left = 0,
    right = newStr.length - 1;
  while (left < right) {
    if (newStr[left] !== newStr[right]) {
      return (
        validSubPolindrome(newStr, left + 1, right) ||
        validSubPolindrome(newStr, left, right - 1)
      );
    } else {
      left++;
      right--;
    }
  }
  return true;
};

console.log(validPalindrome('cbbcc'));
