/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) {
        return false;
    };
    
    const sortedS = [...s].sort().join('');
    const sortedT = [...t].sort().join('');
    
    return sortedS === sortedT;
};