/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
  let pVals = getVals(p);
  let qVals = getVals(q);
  return pVals === qVals;
};

function getVals(head) {
  let q = [head];
  let vals = [];
  while (q.length > 0) {
    let currNode = q[0];
    if (currNode) {
      q.push(currNode.left);
      q.push(currNode.right);
    }
    vals.push(currNode === null ? q.shift() : q.shift().val);
  }
  return vals.join();
}
