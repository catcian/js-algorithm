/* 
输入: 1->2->3->4->5->NULL
输出: 5->4->3->2->1->NULL
 */
var reverseList = function (head) {
  let p1 = head
  let p2 = null

  while (p1) {
    // console.log(p1.val && p2 && p2.val)
    const temp = p1.next
    // 反转 p1.next = p2
    p1.next = p2
    // 遍历
    p2 = p1
    p1 = temp
  }
  return p2
}

/* 
时间复杂度 while 循环体 O(n)
空间复杂分 没有数组或者矩阵 O(1)
*/