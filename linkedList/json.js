const json = {
  a: {b: {c: 1}},
  d: {e: 2}
}

// const path = ['a', 'b', 'c']
const path = ['d','e']

let p = json
path.forEach(key => {
  p = p[key]
})
console.log(1)
console.log(p)