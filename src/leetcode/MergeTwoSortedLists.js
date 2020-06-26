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
  if(l1 === null || l2 === null) { // 缺少空值判断
    return l1 ? l1 : l2
  }
  var result = {val: null, next: null};
  if(l1.val < l2.val) {
    result = l1;
    l1 = l1.next;
  } else {
    result = l2;
    l2 = l2.next;
  }
  var index = result
  while(l1 && l2) {
    if(l1.val < l2.val) {
      index.next = l1;
      l1 = l1.next;
    } else {
      index.next = l2;
      l2 = l2.next;
    }
    // console.log('result: ' + JSON.stringify(result))
    // console.log('index ' + JSON.stringify(index))
    index = index.next;
  }
  index.next = l1 ? l1 : l2;
  var index2 = result
  do{
    console.log(index2.val)
    index2 = index2.next
  }while(index2)
  return result;
};

function ListNode(val) {
  this.val = val;
  this.next = null;
}

var l1 = new ListNode(1);
var l2 = new ListNode(2);
var l4 = new ListNode(4);
l1.next = l2;
l2.next = l4;

var r1 = new ListNode(1);
var r3 = new ListNode(3);
var r4 = new ListNode(4);
r1.next = r3;
r3.next = r4;

mergeTwoLists(l1, r1)