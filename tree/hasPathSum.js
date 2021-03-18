function TreeNode (val, left, right) {
  this.val = val === undefined ? 0 : val
  this.left = left === undefined ? null : left
  this.right = right === undefined ? null : right
}

const data = new TreeNode(
  5,
  new TreeNode(4, new TreeNode(11, new TreeNode(7), new TreeNode(2))),
  new TreeNode(8, new TreeNode(13), new TreeNode(4, undefined, new TreeNode(1)))
)

// const targetSum = 22

// function hasPathSum (root, targetSum) {
//   if (!root) return false
//   let res = false
//   function dfs (root, currentSum, path) {
//     if (!root.left && !root.right && currentSum === targetSum) res = true
//     if (root.left) dfs(root.left, root.left.val + currentSum, path.concat(root.left.val))
//     if (root.right) dfs(root.right, root.right.val + currentSum, path.concat(root.right.val))
//   }

//   dfs(root, root.val, [root.val])

//   return res
// }

// const res = hasPathSum(data, targetSum)

/* 
给定一个节点
输出从根节点到当前节点的路径
 */

const treeNode = new TreeNode (13)

function getTargetPath (root, target) {
  if (!root) return []
  let targetPath = []
  function dfs (root, path) {
    if (root.val === target.val) targetPath = path
    if (root.left) dfs(root.left, path.concat([root.left.val]))
    if (root.right) dfs(root.right, path.concat([root.right.val]))
  }
  dfs(root, [root.val])
  return targetPath
}

const res = getTargetPath(data, treeNode)// [5,8,13]

