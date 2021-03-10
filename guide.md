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
stack/callStack.js

3-5 stack summary
1. stack 后进先出 数据结构
1. js 没有栈，但是可以用 Array 实现栈的所有功能
1. 栈常用操作 栈顶/尾元素 push/pop/ stack[stack.length - 1]

4-1 队列 queue
1. 先进先出 数据结构
1. 操作 enqueue 入队，dequeue 出队
1. Js 没有队列，可以用Array 实现队列的功能
queue/queue.js

4-2 队列应用场景
1. 需要 先进先出 的场景
1. 食堂排队打饭/先进先出，保证有序、js 异步任务队列、计算最近的请求次数

EventLoop

js 引入 Callback Queue ，因为 js 是单线程，无法同时处理异步中的并发任务
使用任务队列先后处理异步任务

js -> WebApi -> Callback Queue

输入一个数组，代表每个请求发起的时刻，在 1、100、3001、3002ms 4个时刻发其4个请求
inputes [[], [1], [100], [3001], [3002]]
输出每个请求下最近的请求次数，最近指以当前时刻 3000ms 内的请求次数
out [null, 1, 2, 3, 3]

1. 最先发起的时刻，最先跑出
1. 新请求就入队，3000ms前发出请求出队
1. 队列的长度就是最近请求次数

4-3 leetcode 933 最近请求次数
1. 类，实例化类
1. 按照数组顺序一次调用 ping 方法，每次调用ping 传入的参数就是 这几个数字
1. 每次调用完 ping 方法返回的数字会放入到输出的数组里

思路：
1. 新建队列， 新请求就入队，3000ms 前发出的请求出队
1. 队列的长度就是最近请求次数

4-4 js 异步中的任务队列
setTimeout(() => console.log(1), 0)
console.log(2)

打印结果？
先2 后1

js 引擎（heap/stack）
callback queue
webapi （DOM（click）/ajax/setTimeout）

一段js 代码最初执行的时候，会有主事件、匿名的主事件，放入到 callback queue 里面
js 引擎会去 callback queue 里面获取一个事件执行，因为js 是单线程，每次只能处理一个事件
在执行这个事件中如果内部存在异步任务，如 dom/ajax/setTimeout 会递交给 webAPIs 执行 ，递交后不在管理，WebAPIs 在执行完后，会把回调中的js代码再次放入到 callback queue 里面，然后c allback queue 任务队列前面的事件都执行完后了，那么新放进的回调函数的代码放入到js引擎里面执行。如果回调里面还有异步任务，继续放入 WebAPIs 一次循环

4-5 queue summary
1. 先进先出 数据结构
1. js 没有队列，可以用 Array 实现队列的所有功能
1. 队列常用操作 push shift queue[0]

5-1 链表
1. 多个元素组成的列表
1. 元素存储不连续，用 next 指针连在一起 

数组 vs 链表 区别：
数组 增删非首尾元素时往往需要移动元素
链表 增删非首尾元素，不需要移动元素， 只需要更改 next 的指针指向

js 中的链表
1. js 中没有链表
1. 可以用 Object 模拟链表

/linkedList/index.js
操作：
1. 创建链表
1. 遍历链表
1. 插入
1. 删除

5-2 leetcode237 删除链表中的节点
4 - 5 - 1 - 9
常规删除，找到被删除节点的上一个节点，把该节点的指针指向 被删除节点的一下个节点
1. 思路
1. 无法直接获取被删除节点的上一个节点
1. 将被删除的节点转移到下一个节点，先把下一个节点的值转移到现在的节点上
1 先把 9 赋值节点 1 ： 4 -5 - 9 -9 

步骤：
1. 将被删除节点的值改为下一个节点值
1. 删除下一个节点

5-3 leetcode 206 反转链表
... > n > n + 1 > ...
... > n + 1 > n > ...  
1. 反转两个节点 n + 1 .next 指向 n
1. 反转多个节点， 双指针遍历链表，重复上述操作

1 - 2 -3 -4 -6 -null
5- 4 -3 -2 -1 - null
步骤
1. 双指针一前一后遍历链表
1. 反转双指针

5-4 2 两数相加
思路：
2- 4 -3 + 5-6-4
7 - 0 -8
342 + 465 = 807

2 + 5 =7 
4 + 6 =10
3 + 4 = 7 +1

步骤
1. 建立空链表
1. 遍历追加两个链表，模拟相加操作，将个位数追加到新链表上，将十位数留到下一位去相加



