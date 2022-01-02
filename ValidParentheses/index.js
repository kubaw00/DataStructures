// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.

// Example 1:

// Input: s = "()"
// Output: true
// Example 2:

// Input: s = "()[]{}"
// Output: true
// Example 3:

// Input: s = "(]"
// Output: false

// Constraints:

// 1 <= s.length <= 104
// s consists of parentheses only '()[]{}'.

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const map = { '{': '}', '(': ')', '[': ']' };
  const tab = [];
  for (let i = 0; i < s.length; i++) {
    if (s.length === 0) return true;

    if (map[s[i]]) {
      tab.push(s[i]);
    } else {
      const leftBracket = tab.pop();
      const currentBracket = map[leftBracket];
      if (s[i] !== currentBracket) return false;
    }
  }

  return tab.length === 0;
};

const isValid = (string) => {
  const stack = [];

  for (let i = 0; i < string.length; i++) {
    switch (string[i]) {
      case '{':
        stack.push('}');
        break;
      case '(':
        stack.push(')');
        break;
      case '[':
        stack.push(']');
        break;
      default:
        if (string[i] !== stack.pop()) {
          return false;
        }
    }
  }

  return stack.length === 0;
};
