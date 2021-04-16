
// const s = "2"
// const s = "0089"
// const s = "-0.1"
// const s = "+3.14"
// const s = "4."
// const s = "-.9"
// const s = "2e10"
// const s = "-90E3"
// const s = "3e+7"
// const s = "+6e-1"
// const s = "53.5e93"
// const s = "-123.456e789"
// const s = "abc"
const s = "0.."

const graph = {
  0: { 'blank': 0, 'sign': 1, 'dot': 2, 'digit': 6},
  1: { 'dot': 2, 'digit': 6},
  2: { 'digit': 3},
  3: { 'digit': 3, 'E': 4},
  4: { 'digit': 5, 'sign': 7},
  5: { 'digit': 5},
  6: { 'E': 4, 'dot': 3, 'digit': 6},
  7: { 'digit': 5}
}

function isNumber (str) {
  let state = 0
  for(let c of str.trim()) {
    if (c>='0' && c<='9') {
      c = 'digit'
    } else if (c === '+' || c === '-') {
      c = 'sign'
    } else if (c === '.') {
      c = 'dot'
    } else if (c === 'e' || c === 'E') {
      c = 'E'
    } else if (c === ' ') {
      c = 'blank'
    }

    state = graph[state][c]
    if (!state) return false
  }
  if (state === 3 || state === 5 || state === 6) {
    return true
  } else {
    return false
  }
}

const res = isNumber(s)
