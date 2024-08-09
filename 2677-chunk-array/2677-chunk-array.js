/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 
 
 /*
    내부 배열에 size가 0될때까지 push
    
 */
var chunk = function(arr, size) {
    const result = [];
    
    let count = size;
    let inner = [];
    
    for (let i = 0; i < arr.length; i++) {
        if (count === 1) {
            inner.push(arr[i]);
            result.push(inner);
            count = size;
            inner = [];
        } else {
            count --;
            inner.push(arr[i]);
        }
    }
    
    if (inner.length > 0) result.push(inner);
    return result;
};
