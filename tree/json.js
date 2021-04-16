const json = {
  a: {b: {c: 1}},
  d: [1, 2]
}

const dfs = (node, path) => {
  console.log(node, path)
  Object.keys(node).forEach(key => {
    dfs(node[key], path.concat(key))
  })
}

dfs(json, [])

/*

{ a: { b: { c: 1 } }, d: [ 1, 2 ] } []
{ b: { c: 1 } } [ 'a' ]
{ c: 1 } [ 'a', 'b' ]
1 [ 'a', 'b', 'c' ]
[ 1, 2 ] [ 'd' ]
1 [ 'd', '0' ]
2 [ 'd', '1' ]

*/