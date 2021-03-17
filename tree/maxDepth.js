function TreeNode (val, left, right) {
  this.val = val === undefined ? 0 : val
  this.left = left === undefined ? null : left
  this.right = right === undefined ? null : right
}

const tree = new TreeNode(
  3, 
  new TreeNode(9), 
  new TreeNode(20, new TreeNode(15), new TreeNode(7))
)

const maxDepth = root => {
  let res = 0
  const dfs = (root, l) => {
    if (!root) return 
    console.log(root.val)
    if (!root.left && !root.right) res = Math.max(res, l)
    dfs(root.left, l + 1)
    dfs(root.right, l + 1)
  }
  dfs(root, 1)
  return res
}

const res = maxDepth(tree)
