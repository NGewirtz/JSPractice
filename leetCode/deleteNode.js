/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
var deleteNode = function(node) {
  let currNode = node;
  while (currNode && currNode.next) {
    currNode.val = currNode.next.val;
    if (currNode.next.next === null) {
      currNode.next = null;
    }
    currNode = currNode.next;
  }
};
