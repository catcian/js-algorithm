// var deleteNode = function (node) {
//   // 将当前节点值改为下一个节点的值
//   node.val = node.next.val
//   // 将当前节点的指针 指向下下节点
//   node.next = node.next.next
// }
// /* 
// 时间复杂度 没有任何循环 O(1)
// 空间复杂度 function 没有任务数组、或者矩阵 O(1)
//  */


function NodeList(val, next) {
  this.val = val
  this.next = null
}
const head = new NodeList(4)
const node = new NodeList(5)
const node2 = new NodeList(1)
const node3 = new NodeList(9)

head.next = node
node.next = node2
node2.next = node3

function delNode(node) {
  // 将被删除的节点 转移到下一个节点
  node.val = node.next.val
  // 删除下一个节点
  node.next = node.next.next
}

delNode(node)
