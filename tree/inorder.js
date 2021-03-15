const bt = require('./bt')

const inorder = (root) => {
  if (!root) return
  // 对 根节点 的左子树 进行中序遍历
  inorder(root.left)
  // 访问 根节点
  console.log(root.val)
  // 对 根节点 的右子树 进行中序遍历
  inorder(root.right)
}

inorder(bt)
/* 
4

2

5

1

6

3

7
 */
