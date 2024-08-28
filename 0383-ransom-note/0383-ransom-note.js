/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    const obj = {};
    for (const char of magazine) {
      if (!obj[char]) {
        obj[char] = 0;
      }
      obj[char]++;
    }

    for (const char of ransomNote) {
      if (!obj[char]) {
        return false;
      }
      obj[char]--;
    }

    return true;
};