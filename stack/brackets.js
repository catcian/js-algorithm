// leetcode 有效括号
/* 
思路：{[]} true
1. 对于没有闭合的左括号来讲，越靠后的左括号，对应的右括号越靠前
1. 满足 后进先出

步骤：
1. 新建一个栈
1. 扫描字符串，遇到左括号入栈，遇到右括号和栈顶括号（数组最后一位）如果类型匹配的右括号就出栈，
如何类型不匹配直接判定不合法。
1. 最后栈空就合法，否则不合法
优化：
1. 字符串长度为奇数 str.length % 2 === 1
1. 栈 -> 字典
*/

var isValid = function(str){
  const stack = []
  for (let i=0; i<str.length; i++) {
    const s = str[i]
    if (s === '(' || s === '[' || s === '{') {
      stack.push(s)
    } // <- error
    const top = stack[stack.length - 1]
    if ((s === ')' && top === '(')
    || ( s === ']' && top === '[')
    || ( s === '}' && top === '{')) {
      stack.pop()
    } else {
      return false
    }
  }
  return stack.length === 0
}

console.log('isValid',isValid("{[]}"))

var isValid2 = function (str) {
  const stack = []
  if (str.length % 2 === 1) return false
  for (let i = 0; i < str.length; i++) {
    const character = str[i]
    if (character === '(' || character === '[' || character === '{') {
      stack.push(character)      
    } else {
      const top = stack[stack.length - 1]
      if (
        (top === '(' && character === ')') ||
        (top === '[' && character === ']') ||
        (top === '{' && character === '}')
      ) {
        stack.pop()
      } else {
        return false
      }
    }
  }
  return stack.length === 0
}

console.log('isValid2', isValid2('{[]}'))

/* 
时间复杂度 O(n)
空间复杂度 O(n) stack 可能占用 n 个元素
 */