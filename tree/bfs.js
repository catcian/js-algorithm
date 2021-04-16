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

const bfs = (root) => {
  const queue = [root]

  while (queue.length > 0) {
    const n = queue.shift()
    console.log(n.val)
    n.children.forEach(child => {
      queue.push(child)
    })
  }
}

bfs(tree)
/* 

         a            
      /    \
    b       c         
  /  \    /  \
 d    e  f    g

a、b、c、d、e、f、g 

*/