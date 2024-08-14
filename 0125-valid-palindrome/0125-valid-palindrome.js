/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    const reg = /[^A-Za-z0-9]/g;
    s = s.toLowerCase().replace(reg, '');
    
    let left = 0;
    let right = s.length - 1;
    
    while (left < right){
        if (s[left] !== s[right]) {
            return false;
        }
        
        left++; 
        right--;
    }
    
    return true;
};