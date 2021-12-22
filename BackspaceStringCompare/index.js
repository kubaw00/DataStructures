// Given two strings s and t, return true if they are equal when both are typed into empty text editors. '#' means a backspace character.

// Note that after backspacing an empty text, the text will continue empty.

// Example 1:

// Input: s = "ab#c", t = "ad#c"
// Output: true
// Explanation: Both s and t become "ac".
// Example 2:

// Input: s = "ab##", t = "c#d#"
// Output: true
// Explanation: Both s and t become "".
// Example 3:

// Input: s = "a#c", t = "b"
// Output: false
// Explanation: s becomes "c" while t becomes "b".

// Constraints:

// 1 <= s.length, t.length <= 200
// s and t only contain lowercase letters and '#' characters.

// Follow up: Can you solve it in O(n) time and O(1) space?

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

const backspaceCompare = (s, t) => {
  const tab1 = [];
  const tab2 = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '#') {
      tab1.splice(i - 1, 2);
    } else {
      tab1.push(s[i]);
    }
  }
  const string1 = tab1.join('');

  for (let j = 0; j < t.length; j++) {
    if (s[j] === '#') {
      tab2.splice(j - 1, 2);
    } else {
      tab2.push(s[j]);
    }
  }
  const string2 = tab2.join('');

  if (string1.length === string2.length && string1.includes(string2)) {
    return console.log(true);
  } else {
    return console.log(false);
  }
};

backspaceCompare('xywrrmp', 'xywrrm#p');
