const graph = require('./graph')

const visited = new Set()

function bfs (node) {
  const q = [node]
  visited.add(node)

  while (q.length) {
    const n = q.shift()
    console.log(n)
    graph[n].forEach(c => {
      if (!visited.has(c)){
        q.push(c)
        visited.add(c)
      } 
    })
  }

}

bfs(2)
/* 
2

0

3

1
 */