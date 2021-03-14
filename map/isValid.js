/* 
输入：s = "()[]{}"
输出：true
 */
const isValid = function (s) {
  const stack = []
  const map = new Map()
  map.set('(', ')')
  map.set('[', ']')
  map.set('{', '}')

  for (let i=0; i<s.length; i++){
    const item = s[i]
    if (map.has(item)) {
      stack.push(item)

    } else {
      const t = stack[stack.length - 1]
      if (map.get(t) === item ) {
        stack.pop()
      } else {
        return false
      }
    }
  }
  return stack.length === 0
}

const s = ']'

const res = isValid(s)
