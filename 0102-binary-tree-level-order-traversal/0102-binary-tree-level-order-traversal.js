/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if (!root) return [];

    const queue = [];
    const output = [];
    
    queue.push(root);
    
    while (queue.length) {
        const length = queue.length;
        const row = []
        for(let i = 0; i < length; i++) {
            const current = queue.shift();
            if (current.left) queue.push(current.left);
            if (current.right) queue.push(current.right);
            row.push(current.val);
        }
        output.push(row);
    }

    return output;
};