function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}

const l1 = new ListNode(1)
const l2 = new ListNode(1,new ListNode(3, new ListNode(4)))


 var mergeTwoLists = function(l1, l2) {
  const res = new ListNode(0)
  let p = res
  let p1 = l1
  let p2 = l2
  while(p1 && p2) {
      if (p1.val < p2.val) {
          p.next = p1
          p1 = p1.next
      } else {
          p.next = p2
          p2 = p2.next
      }
      p = p.next
  }
  if (p1) {
      p.next = p1
  }
  if (p2) {
      p.next = p2
  }

  return res.next

};

const res = mergeTwoLists(l1, l2)
