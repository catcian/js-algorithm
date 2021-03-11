function ListNode (val, next) {
  this.val = val === undefined ? 0 : val
  this.next = next === undefined ? null : next
}


function hasCycle (head) {
  let p1 = head
  let p2 = head

  while (p1 && p2 && p2.next) {
    p1 = p1.next
    p2 = p2.next.next
    if ( p1 === p2) {
      return true
    }
  }
  return false
}