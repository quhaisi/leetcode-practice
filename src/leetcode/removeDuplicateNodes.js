/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var removeDuplicateNodes = function (head) { // 不使用额外空间
  let current = head;
  while (current) {
    let quick = current;
    while (quick.next) {
      if (current.val === quick.next.val) {
        quick.next = quick.next.next;
      } else {
        quick = quick.next;
      }
    }
    current = current.next;
  }
  return head;
};
