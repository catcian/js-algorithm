const graph = require('./graph')

const visited = new Set()
function dfs (node) {
  console.log(node)
  visited.add(node)
  graph[node].forEach(n => {
    if (!visited.has(n)) dfs(n)
  })
}

dfs(2)

/* 
2

0

1

3
 */