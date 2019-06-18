/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
  var basic = l2.val > l1.val ? l1 : l2;
  var comp = l2.val > l1.val ? l2 : l1;
  var index = comp;
  while(index) {
    if(basic.val > comp.val) {
      var tempNext = comp.next;
      comp.next = basic;
      basic.next = tempNext;
    } else {
      var tempNext = basic.next;
      basic.next = comp.next;
      comp.next = tempNext;
    }
    index = index.next;
  }
  return basic;
};