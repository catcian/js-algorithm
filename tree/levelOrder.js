function TreeNode (val, left, right) {
  this.val = val === undefined ? 0 : val
  this.left = left === undefined ? null : left
  this.right = right === undefined ? null : right
}

const data = new TreeNode(
  3,
  new TreeNode(9),
  new TreeNode(20, new TreeNode(15), new TreeNode(7))
)

// const leverOrder = root => {
//   if (!root) return []
//   const q = [[root, 0]]
//   let res = []
//   while (q.length) {
//     const [head, l] = q.shift()
//     if (!res[l]) {
//       res[l] = [head.val]
//     } else {
//       res[l].push(head.val)
//     }
//     console.log(head.val, l)
//     if (head.left) q.push([head.left, l+1])
//     if (head.right) q.push([head.right, l+1])
//   }
//   return res
// }

// const res = leverOrder(data)

function levelOrder (root) {
  if (!root) return []
  const q = [root]
  let res = []
  while (q.length) {
    let len = q.length
    res.push([])
    while (len--) {
      const head = q.shift()
      res[res.length-1].push(head.val)
      if (head.left) q.push(head.left)
      if (head.right) q.push(head.right)
    }
  }
  return res
}

const res = levelOrder(data)
