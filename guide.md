2-1 时间复杂度
1. 它是一个函数，用大O 表示，比如O(1)、O(n)、O(logN)
1. 定性描述该算法的运行时间。不会描述具体多少秒，描述大概运行的趋势。而趋势就是用函数来表示
1 < logN < n < n^2

O(1)
let i = 0
i += 1
理解：每次执行代码，这段代码只会执行一次

O(n)
for(let i=0; i < n; i +=1){
  console.log(i)
}
理解：每次执行代码，代码会执行n次

O(1) + O(n) = O(n)
如果前面代码执行时间复杂度O(1)的代码
后面执行时间复杂度O(n)的for 循环整个的时间复杂度又该如何计算呢？
let i = 0
i += 1
for(let j = 0; j < n; j+=1){
  console.log(j)
}

O(n) * O(n) = O(n^2)
for(let i = 0; i < n; i += 1){
  for(let j = 0; j < n; j +=1){
    console.log(i,j)
  }
}

O(logN) 以2为底logN，含义就是求2的多少次方等于N
let i = 1
while(i < n) {
  console.log(i)
  i *= 2
}
i = 1 -> i = (2^0)1 * 2
i = 2 -> i = (2^1)2 * 2
i = 2 * 2 -> i = (2^2)(2 * 2) * 2 > n
2^x > n
x 表示 logn


2-2 空间复杂度是什么？
1. 一个函数，用大 O 表示，比如O(1), O(n), O(n^2)
1. 算法在运行过程中临时占用存储空间大小的度量，编写的代码占用内存多不多

O(1)
let i = 0; 
i += 1;
原因：只声明单个变量 i，单个变量占用的内存永远是 1

O(n)
const list = []
for(let i = 0; i < n; i +=1){
  list.push(i)
}
原因：给数组添加了 n 个值，相当于占用 n 个内存单元

O(n^2) 矩阵
const matrix = []
for(let i = 0; i< n; i += 1){
  matrix.push([])
  for(let j = 0; j < n; i +=1){
    matrix[i].push(j)
  }
}

3-1 栈  stack
1. 一种 后进先出 的数据结构。蜂窝煤
1. 操作 push/入栈 pop/出栈
1. JavaScript 中没有栈，但是可以用Array 实现栈的所有功能
code: stack/index.js

3-2 场景下的栈 stack
1. 后进先出 场景
1. 十进制转二进制、有效的括号、函数调用堆栈

35 -> 对32 转 二进制
1. 后出来的余数反而要排到前面
1. 可以把余数依次入栈，然后再出栈，就可以实现余数的倒叙输出

((((())))) -> VALID
()()()() -> VALID
((((() ->INVALID
((()(()))) -> VALID
1. 越靠后的左括号，它对应的右括号越靠前 
1. 左括号想象成入栈，右括号想象成出栈，栈空了就合法

function greeting() {
  <!-- [1] some code -->
  sayHi()
  <!-- [2] some code -->
}

function sayHi() {
  return 'Hi'
}
<!-- 调用 greeting -->
greeting()
<!-- [3] some code -->
1. 最后调用的函数，最先执行
1. js解释器使用栈来控制函数的调用顺序

3-3 leetcode 有效的括号
stack/brackets.js

3-4 js 函数调用堆栈


## 队列 queue
1. 先进先出
1. Js 没有队列，可以用Array 实现队列的功能