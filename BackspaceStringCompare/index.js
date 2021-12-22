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
      tab1.splice(tab1.length - 1, 1);
    } else {
      tab1.push(s[i]);
    }
  }
  const string1 = tab1.join('');

  for (let j = 0; j < t.length; j++) {
    if (t[j] === '#') {
      tab2.splice(tab2.length - 1, 1);
    } else {
      tab2.push(t[j]);
    }
  }
  const string2 = tab2.join('');

  console.log(string1, string2, tab1, tab2);
  if (string1.length === string2.length && string1.includes(string2)) {
    return console.log(true);
  } else {
    return console.log(false);
  }
};

backspaceCompare('xywrrmp', 'xywrrm#p');
