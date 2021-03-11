function ListNode (val, next) {
  this.val = val=== undefined ? 0 : val
  this.next = next === undefined ? null : next
}
/* 
1 - 1 - 2
1 - 2 

 */
const link = new ListNode(1, new ListNode(1, new ListNode(3)))

function deleteDuplicates (head) {
  // 创建指针
  let p = head

  while (p && p.next) {
    if ( p.val === p.next.val) {
      p.next = p.next.next
    } else {
      p = p.next
    }
  }
  return head
}

const deleteDuplicateLink = deleteDuplicates(link)
console.log(deleteDuplicateLink)