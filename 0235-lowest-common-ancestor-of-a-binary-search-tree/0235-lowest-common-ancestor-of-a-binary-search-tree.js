/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    let currentRoot = root;
    
    // console.log(root.left.val, p.val, q.val)
    
    while (currentRoot) {
        if (p.val > currentRoot.val && q.val > currentRoot.val) {
            currentRoot = currentRoot.right
        } else if (p.val < currentRoot.val && q.val < currentRoot.val) {
            currentRoot = currentRoot.left;
        } else {
            return currentRoot;
        }
    }
};
