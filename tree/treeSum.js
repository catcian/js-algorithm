const root = {
  val: 1,
  left: {
    val: 2,
    left: {
      val: 4,
      left: null,
      right: null,
    },
    right: {
      val: 5,
      left: null,
      right: null
    }
  },
  right: {
    val: 3,
    left: null,
    right: null,
  }
}
// 124
// 125
// 13
// 262


function treeSum(tree) {
  let result = []
  function dfs (tree, currentPath) {
    if(!tree.left && !tree.right) result.push(+currentPath.join(""))
    if(tree.left) dfs(tree.left, currentPath.concat(tree.left.val))
    if(tree.right) dfs(tree.right, currentPath.concat(tree.right.val))
  }
  dfs (tree, [tree.val])
  return result.reduce((cur,pre)=>cur+=pre, 0)
}

const result = treeSum(root)
console.log('result', result)// 262