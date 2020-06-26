var utils = require('../../utils')
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
var addTwoNumbers_unsolved = function(l1, l2) { // js无法处理2的53次方的数字
  if(l1.val === 0 && l2.val === 0 && l1.next === null && l2.next === null) return {val: 0, next: null}
  var listToNum = function(l) {
    var multiple = 1;
    var num = 0;
    while(l) {
      num+=l.val*multiple;
      multiple*=10;
      l=l.next;
    }
    return num;
  }
  var sum = listToNum(l1) + listToNum(l2);
  console.log('debug: '+sum)
  var l3 = []
  while(sum>=1) {
    console.log(sum%10)
    l3.push({
      val: sum%10,
      next: null
    })
    sum = parseInt(sum/10)
  }
  for(var i = 0; i < l3.length; i++) {
    l3[i].next = l3[i+1]
  }
  return l3[0]
};

var addTwoNumbers_unsolved2 = function(l1, l2) {
  var l1_next = l1,
    l2_next = l2,
    l3={val: -1,next: null},
    current=l3
    carry=0;
  while(l1_next && l2_next) {
    current.next = {
      val: (l1_next.val+l2_next.val+carry)%10,
      next: null
    }
    carry = l1_next.val+l2_next.val+carry >= 10 ? 1 : 0
    l1_next = l1_next.next
    l2_next = l2_next.next
    current = current.next
  }
  current.next = l1_next ? l1_next : l2_next
  return l3.next
}

var addTwoNumbers_solved = function(l1, l2) {
  var l1_next = l1,
    l2_next = l2,
    l3={val: -1,next: null},
    current=l3
    carry=0;
  while(l1_next && l2_next) {
    current.next = {
      val: l1_next.val+l2_next.val,
      next: null
    }
    l1_next = l1_next.next
    l2_next = l2_next.next
    current = current.next
  }
  current.next = l1_next ? l1_next : l2_next
  current=l3.next
  while(current) {
    if(current.val + carry >= 10) {
      current.val = (current.val + carry)%10
      carry = 1
    } else {
      current.val = current.val + carry
      carry = 0
    }
    if(current.next === null) break;
    current=current.next
  }
  if(carry === 1) {
    current.val = current.val%10
    current.next = {
      val: 1,
      next: null
    }
  }
  return l3.next
}

var addTwoNumbers_solved2 = function(l1, l2) {
  var l1_next = l1,
    l2_next = l2,
    l3={val: -1,next: null},
    current=l3
    carry=0;
  while(l1_next || l2_next) {
    current.next = {
      val: ((l1_next?l1_next.val:0)+(l2_next?l2_next.val:0)+carry)%10,
      next: null
    }
    carry = ((l1_next?l1_next.val:0)+(l2_next?l2_next.val:0)+carry) >= 10 ? 1 : 0
    l1_next = l1_next?l1_next.next:null
    l2_next = l2_next?l2_next.next:null
    current = current.next
  }
  if(carry === 1) {
    current.val = current.val%10
    current.next = {
      val: 1,
      next: null
    }
  }
  return l3.next
}

var addTwoNumbers = function(l1, l2) { // addTwoNumbers_solved2 代码样式优化
  var l1_next = l1,
    l2_next = l2,
    l3=new ListNode(-1),
    current=l3
    carry=0;
  while(l1_next || l2_next) {
    var x = l1_next ? l1_next.val : 0;
    var y = l2_next ? l2_next.val : 0;
    var sum = x + y + carry;
    current.next = new ListNode(sum % 10);
    carry = parseInt(sum / 10);
    l1_next = l1_next ? l1_next.next : null
    l2_next = l2_next ? l2_next.next : null
    current = current.next
  }
  if(carry === 1) {
    current.next = new ListNode(carry)
  }
  return l3.next
}

var addTwoNumbers = function(l1, l2) { // addTwoNumbers_solved2 优化去掉额外的变量生命
  var l3=new ListNode(-1),
    current=l3
    carry=0;
  while(l1 || l2) {
    var x = l1 ? l1.val : 0;
    var y = l2 ? l2.val : 0;
    var sum = x + y + carry;
    current.next = new ListNode(sum % 10);
    carry = parseInt(sum / 10);
    l1 = l1 ? l1.next : null
    l2 = l2 ? l2.next : null
    current = current.next
  }
  if(carry === 1) {
    current.next = new ListNode(carry)
  }
  return l3.next
}

/**
 * testcase
 * [2,4,3]
 * [5,6,4]
 * [0]
 * [0]
 * [0,8,8,8,8,2,9,3,1,1]
 * [0,9,1,5,5,5,1,1,6]
 * [1,0,6,9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]
 * [5,6,4]
 * [5]
 * [5]
 */

console.log(JSON.stringify(addTwoNumbers(utils.genListNode([2,4,3]), utils.genListNode([5,6,4]))))
console.log(JSON.stringify(addTwoNumbers(utils.genListNode([0]), utils.genListNode([0]))))
console.log(JSON.stringify(addTwoNumbers(utils.genListNode([1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]), utils.genListNode([5,6,4]))))
console.log(JSON.stringify(addTwoNumbers(utils.genListNode([5]), utils.genListNode([5]))))