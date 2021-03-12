let mySet = new Set()

// add
mySet.add(1)
mySet.add(5)
mySet.add(5)

mySet.add('some text')

// let o = {a: 1, b:2}
// mySet.add(o)
mySet.add({a: 1, b: 2})

// has
const has = mySet.has(3)

// delete
mySet.delete(5)

// for of mySet.keys()  mySet.values()
// for(let item of mySet) console.log(item)
for(let [key, value] of mySet.entries()) console.log(key, value)

// Set Array
const myArr = [...mySet]
const myArr2 = Array.from(mySet)

const mySet2 = new Set([1,2,3,4])

// 交集
const intersection = new Set([...mySet].filter(x => mySet2.has(x)))

// 差集
const difference = new Set([...mySet].filter(x => !mySet2.has(x)))