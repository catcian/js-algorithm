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

function minDepth (root) {
  if (!root) return 0
  const q = [[root,1]]

  while (q.length) {

    const [head, l] = q.shift()
    if (!head.left && !head.right) return l
    if (head.left) q.push([head.left, l+1])
    if (head.right) q.push([head.right, l+1])
    
  }
}

const res = minDepth(data)
