const bt = require('./bt')

// const inorder = (root) => {
//   if (!root) return
//   // 对 根节点 的左子树 进行中序遍历
//   inorder(root.left)
//   // 访问 根节点
//   console.log(root.val)
//   // 对 根节点 的右子树 进行中序遍历
//   inorder(root.right)
// }

// inorder(bt)
/* 
         1            
      /    \
    2       3         
  /  \    /  \
 4    5  6    7    
 
4、2、5、1、6、3、7

*/


function inorder (root) {
  const stack = []
  let p = root
  while (stack.length || p) {
    while (p) {
      stack.push(p)
      p = p.left
    }
    const n = stack.pop()
    console.log(n.val)
    p = n.right
  }
}

inorder(bt)
