/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
*/
var chunk = function(arr, size) {
    const result = [];
    
    let count = size;
    let inner = [];
    
    for (let i = 0; i < arr.length; i++) {
        if (count === 1 || i === arr.length - 1) {
            inner.push(arr[i]);
            result.push(inner);
            count = size;
            inner = [];
        } else {
            count --;
            inner.push(arr[i]);
        }
    }
    
    return result;
};
