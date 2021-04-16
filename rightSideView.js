function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
}

const tree = new TreeNode(
  1,
  new TreeNode(2, undefined, new TreeNode(5)),
  new TreeNode(3, undefined, new TreeNode(4))
)

console.log('tree', tree)

/*
         1            
      /    \
    2       3         
     \       \
      5       4

1、3、4
 */

function rightSideView(root) {

  const queue = [[root, 0]]
  let result = []

  while(queue.length > 0) {
    const [head, level] = queue.shift()
    if (!result[level]){
      result[level] = [head.val]
    } else {
      result[level].push(head.val)
    }
    if (head.left) queue.push([head.left, level+1])
    if (head.right) queue.push([head.right, level+1])
  }
  return arr.reduce((prev, curr) => {
    prev.push(curr.pop())
    return prev
  }, [])

}
rightSideView(tree)

let arr = [ [ 1 ], [ 2, 3 ], [ 5, 4 ] ]
const res = arr.reduce((prev, curr) => {
  console.log(prev, curr)
  prev.push(curr.pop())
  return prev
}, [])
console.log('res', res)