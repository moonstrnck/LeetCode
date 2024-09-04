/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    const stack = [];
    const set = new Set(['+', '-', '*', '/']);

    for (let i = 0; i < tokens.length; i++) {
        const token = tokens[i];

        if (set.has(token)) {
            const secondNum = stack.pop();
            const firstNum = stack.pop();

            if (token === "+") {
                stack.push(firstNum + secondNum);
            } else if (token === "-") {
                stack.push(firstNum - secondNum);
            } else if (token === "*") {
                stack.push(firstNum * secondNum);
            }
            else if (token === "/") {
                stack.push(firstNum / secondNum | 0);
            }

        } else {
            stack.push(Number(token));
        }
    }

    return stack.pop();
};