/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let maxLength = 0,
    left = 0,
    chars = new Set();

    for (let i = 0; i < s.length; i++) {
        while (chars.has(s[i])) {
          chars.delete(s[left]);
          left++;
        }

        chars.add(s[i]);
        maxLength = Math.max(maxLength, chars.size);
    }

    return maxLength;
};