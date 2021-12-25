// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.

// Example 1:

// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.
// Example 2:

// Input: s = "race a car"
// Output: false
// Explanation: "raceacar" is not a palindrome.
// Example 3:

// Input: s = " "
// Output: true
// Explanation: s is an empty string "" after removing non-alphanumeric characters.
// Since an empty string reads the same forward and backward, it is a palindrome.

// Constraints:

// 1 <= s.length <= 2 * 105
// s consists only of printable ASCII characters.

/**
 * @param {string} s
 * @return {boolean}
 */
const isPalindrome = (s) => {
  if (s.length === 0) return true;

  const newStr = s.replaceAll(/[^A-Za-z0-9]/g, '').toLowerCase();
  let rev = '';

  for (let i = newStr.length - 1; i >= 0; i--) {
    rev += newStr[i];
  }

  return rev === newStr;
};

const isPalindrome2 = (s) => {
  if (s.length === 0 || s.length === 1) return true;

  const newStr = s.replaceAll(/[^A-Za-z0-9]/g, '').toLowerCase();
  let left = 0,
    right = newStr.length - 1;
  while (left < right) {
    if (newStr[left] !== newStr[right]) {
      return false;
    } else {
      left++;
      right--;
    }
  }

  return true;
};

const isPalindrome3 = (s) => {
  if (s.length === 0 || s.length === 1) return true;

  const newStr = s.replaceAll(/[^A-Za-z0-9]/g, '').toLowerCase();

  let left = Math.floor(newStr.length / 2),
    right = left;

  if (newStr.length % 2 === 0) {
    left--;
  }

  while (left >= 0 && right <= newStr.length - 1) {
    if (newStr[left] !== newStr[right]) {
      return false;
    } else {
      left++;
      right--;
    }
  }
  return true;
};

console.log(
  isPalindrome2('race a car'),
  isPalindrome('race a car'),
  isPalindrome3('race a car')
);
