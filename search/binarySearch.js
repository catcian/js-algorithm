// Array.prototype.binarySearch = function (item) {
//   // 二分搜索，有序数组

//   const rec = (arr) => {
//     if (arr.length === 1 || arr.length === 0) return arr
//     const left = []
//     const right = []
//     const mid = arr[0]

//     for(let i=1; i<arr.length; i++) {
//       if (arr[i] < mid) {
//         left.push(arr[i])
//       } else {
//         right.push(arr[i])
//       }
//     }
//     return [...rec(left), mid, ...rec(right)]
//   }

//   const res = rec(this)
//   res.forEach((n, i) => this[i] = n)

//   let low = 0
//   let height = this.length - 1

//   while (low <= height) {
//     const mid = Math.floor( (low + height) / 2)
//     const element = this[mid]
//     if (item < element) {
//       height = mid - 1
//     } else if (item > element) {
//       low = mid + 1
//     } else {
//       return mid
//     }
//   }
//   return -1
// }

// const res = [5,4,3,2,1].binarySearch(1)
// console.log('res',res)


Array.prototype.binarySearch = function(item) {
  // 最小下标
  let low = 0
  // 最大下标
  let height = this.length-1
  while(low<=height) {
    const mid = Math.floor((low+height) / 2)
    if (this[mid] < item) {
      low = mid + 1
    } else if (this[mid] > item) {
      height = mid - 1
    } else {
      return mid
    }
  }
  return -1
}
const res = [1,2,3,4,5].binarySearch(5)
console.log('res',res)
