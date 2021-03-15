const bt = require('./bt')

const postorder = (root) => {

  if (!root) return 
  // 对 根节点的 左子树 进行后序遍历
  postorder(root.left)
  // 对 根节点的 右子树 进行后续遍历
  postorder(root.right)
  // 访问 根节点
  console.log(root.val)
}

postorder(bt)

/* 
4

5

2

6

7

3

1
 */