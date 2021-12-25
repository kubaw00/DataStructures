// Given a string s, find the length of the longest substring without repeating characters.

// Example 1:

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.
// Example 2:

// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:

// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

// Constraints:

// 0 <= s.length <= 5 * 104
// s consists of English letters, digits, symbols and spaces.

/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = (s) => {
  if (s.length <= 1) return s.length;

  let longest = 0;

  for (let left = 0; left < s.length; left++) {
    let currentLength = 0,
      seenChars = {};
    for (let right = left; right < s.length; right++) {
      const currentChar = s[right];
      if (!seenChars[currentChar]) {
        currentLength++;
        seenChars[currentChar] = true;
        longest = Math.max(longest, currentLength);
      } else {
        break;
      }
    }
  }
  return longest;
};

const losl = (s) => {
  if (s.length <= 1) return s.length;
  let longest = 0,
    left = 0,
    right = 0;
  const obj = {};
  while (right < s.length) {
    const currentRightChar = s[right];
    if (obj[currentRightChar] >= left) {
      left = obj[currentRightChar] + 1;
    }
    obj[currentRightChar] = right;
    longest = Math.max(longest, right - left + 1);
    right++;
  }

  return longest;
};

console.log(lengthOfLongestSubstring('abbbbbd'));
console.log(losl('abbbbbd'));
