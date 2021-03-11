const arr = [1,2];
const obj = {}
const func = function () {}
console.log(arr)

// instanceOf 原理
function instanceOf (A, B) {
  let p = A

  while (p) {
    if (p === B.prototype) return true
    p = p.__proto__
  }
  return false
}

const result = instanceOf(arr, Function)

