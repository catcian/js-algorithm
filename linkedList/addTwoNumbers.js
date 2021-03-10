function ListNode (val, next) {
  this.val = val === undefined ? 0 : val
  this.next = next === undefined ? null : next
}
/* 
    (2 - 4 - 3) + (5 - 6 - 4)
    7 - 0 - 8
    [9,9,9,9,9,9,9]
    [9,9,9,9]
    [8,9,9,9,0,0,0,1]
 */
var addTwoNumbers = function (l1, l2) {
  // create new linkednList
  let l3 = new ListNode(0)
  // create point 指针
  let p1 = l1
  let p2 = l2
  let p3 = l3
  let carry = 0
  while (p1 || p2) {

    const val1 = p1 ? p1.val : 0
    const val2 = p2 ? p2.val : 0
    
    const val = val1 + val2 + carry
    carry = Math.floor(val / 10)
    p3.next = new ListNode(val % 10)

    if (p1) p1 = p1.next
    if (p2) p2 = p2.next
    p3 = p3.next
  }
  if (carry) p3.next = new ListNode(carry)
  return l3.next
}