var utils = require('../../utils')

function ListNode(val) {
  this.val = val;
  this.next = null;
}

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd_self = function(head, n) {
  let current = head;
  let toRemovePre = head;
  let index = 1;
  while(current.next) {
    current = current.next;
    if(index > n) {
      toRemovePre = toRemovePre.next;
    }
    index++;
  }
  if(index == n) {
    // remove head
    head = head.next;
  } else if (n == 1) {
    toRemovePre.next = null;
  } else {
    toRemovePre.next = toRemovePre.next.next;
  }
  return head
};

var removeNthFromEnd = function(head, n) {
  let dummy = new ListNode(0);
  dummy.next = head;
  let first = dummy;
  let second = dummy;
  let index = 0;
  while(first.next) {
    first = first.next;
    if(index >= n) {
      second = second.next;
    }
    index++;
  }
  second.next = second.next.next;
  return dummy.next;
};



console.log(removeNthFromEnd(utils.genListNode([1,2,3,4,5]), 3))
console.log(removeNthFromEnd(utils.genListNode([1,2,3,4,5]), 1))
console.log(removeNthFromEnd(utils.genListNode([1,2,3,4,5]), 5))