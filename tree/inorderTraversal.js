function TreeNode (val, left, right) {
  this.val = val === undefined ? 0 : val
  this.left = left === undefined ? null : left
  this.right = right === undefined ? null : right
}

const data = new TreeNode(
  1, 
  undefined,
  new TreeNode(2, undefined, new TreeNode(3))
)


// function inorderTraversal (root) {
//   let res = []
//   function rec (root) {
//     if (!root) return 
//     rec(root.left)
//     res.push(root.val)
//     rec(root.right)
//   }
//   rec(root)
//   return res
// }


var inorderTraversal = function (root) {
  let res = []
  let stack = []
  let p = root

  while (stack.length || p) {
    while (p) {
      stack.push(p)
      p = p.left
    }
    const n = stack.pop()
    res.push(n.val)
    p = n.right
  }
  return res
}

const res = inorderTraversal(data)
