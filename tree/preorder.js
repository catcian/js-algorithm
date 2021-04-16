const bt = require('./bt')

// const preorder = (root) => {
//   if (!root) return 
//   // 访问 根 节点
//   console.log(root.val)
//   // 对 左子树 进行先序遍历
//   preorder(root.left)
//   // 对 右子树 进行先序遍历
//   preorder(root.right)
// }

// preorder(bt)

/* 
         1            
      /    \
    2       3         
  /  \    /  \
 4    5  6    7   

1、2、4、5、3、6、7

*/

function preorder (root) {
  const stack = [root]
  while (stack.length) {
    const n = stack.pop()
    console.log(n.val)
    if (n.right) stack.push(n.right)
    if (n.left) stack.push(n.left)
  }
}

preorder(bt)