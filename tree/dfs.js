const tree = {
  val: 'a',
  children: [
    {
      val: 'b',
      children: [
        {
          val: 'd',
          children: []
        },
        {
          val: 'e',
          children: []
        }
      ]
    },
    {
      val: 'c',
      children: [
        {
          val: 'f',
          children: []
        },
        {
          val: 'g',
          children: []
        }
      ]
    }
  ]
}


const dfs = (root) => {
  console.log(root.val)
  root.children.forEach(child => dfs(child))
  // root.children.forEach(dfs)
}

dfs(tree)
/* 
a

b

d

e

c

f

g
 */