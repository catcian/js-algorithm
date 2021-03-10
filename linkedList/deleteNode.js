var deleteNode = function (node) {
  // 将当前节点值改为下一个节点的值
  node.val = node.next.val
  // 将当前节点的指针 指向下下节点
  node.next = node.next.next
}
/* 
时间复杂度 没有任何循环 O(1)
空间复杂度 function 没有任务数组、或者矩阵 O(1)
 */