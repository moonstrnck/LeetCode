/**
 * @param {string} s
 * @return {boolean}
 */

/*
    가장 안쪽에 있는 열린 괄호 다음은 항상 짝이 맞는 닫힌 괄호가 와야한다. 
*/
var isValid = function(s) {
    const brakets = ["(", ")", "{", "}", "[", "]"];
    const stack = [];
    const target = [...s];
  
  for (let i = 0; i < target.length; i++) {
    const braket = target[i];
    
    const braketIndex = brakets.indexOf(braket);
        if (braketIndex % 2 === 0) {
            stack.push(braket);
        } else {
            if (braketIndex === brakets.indexOf(stack[stack.length - 1]) + 1) {
              stack.pop();  
            } else {
              return false;
            }
        }
    
  }

    return stack.length === 0;
};
