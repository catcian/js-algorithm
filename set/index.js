// 去重
const arr = [1, 1, 2, 2, 3]
const arr2 = [...new Set(arr)]

// console.log(arr2)

// 判断元素中是否在集合中
const set = new Set(arr)
const has = set.has(1)

console.log('has', has)

// 求交集
const set2 = new Set([3,4])

const s = new Set([...set].filter(i => set2.has(i)))

console.log('s', s)