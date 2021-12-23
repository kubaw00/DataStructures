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

const backSpaceCompare = (s, t) => {
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

  if (string1.length === string2.length && string1.includes(string2)) {
    return true;
  } else {
    return false;
  }
};

const backSpaceCompare1 = (s, t) => {
  let p1 = s.length - 1;
  let p2 = t.length - 1;

  while (p1 >= 0 || p2 >= 0) {
    if (s[p1] === '#' || t[p2] === '#') {
      if (s[p1] === '#') {
        let backspace = 2;
        while (backspace > 0) {
          p1--;
          backspace--;
          if (s[p1] === '#') {
            backspace += 2;
          }
        }
      }
      if (t[p2] === '#') {
        let backspace = 2;
        while (backspace > 0) {
          p2--;
          backspace--;
          if (t[p2] === '#') {
            backspace += 2;
          }
        }
      }
    } else {
      if (s[p1] === t[p2]) {
        p1--;
        p2--;
      } else {
        return false;
      }
    }
  }

  return true;
};
console.log(
  backSpaceCompare('xywrrmp', 'xywrrmu#p'),
  backSpaceCompare1('xywrrmp', 'xywrrmu#p')
);
