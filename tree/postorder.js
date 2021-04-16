const bt = require('./bt')

// const postorder = (root) => {

//   if (!root) return 
//   // 对 根节点的 左子树 进行后序遍历
//   postorder(root.left)
//   // 对 根节点的 右子树 进行后续遍历
//   postorder(root.right)
//   // 访问 根节点
//   console.log(root.val)
// }

// postorder(bt)

/* 
         1            
      /    \
    2       3         
  /  \    /  \
 4    5  6    7   

4、5、2、6、7、3、1
*/

function postorder (root) {
  const stack = [root]
  const outputStack = []
  while (stack.length) {
    const n = stack.pop()
    outputStack.push(n)
    if (n.left) stack.push(n.left)
    if (n.right) stack.push(n.right)
  }
  while (outputStack.length) {
    const n = outputStack.pop()
    console.log(n.val)
  }
}

postorder(bt)
