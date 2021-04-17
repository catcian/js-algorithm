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
在执行这个事件中如果内部存在异步任务，如 dom/ajax/setTimeout 会递交给 webAPIs 执行 ，递交后不在管理，WebAPIs 在执行完后，会把回调中的js代码再次放入到 callback queue 里面，然后c allback queue 任务队列前面的事件都执行完后了，那么新放进的回调函数的代码放入到js引擎里面执行。如果回调里面还有异步任务，继续放入 WebAPIs 依次循环

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
```
function NodeList(val, next) {
  this.val = val
  this.next = null
}
const head = new NodeList(4)
const node = new NodeList(5)
const node2 = new NodeList(1)
const node3 = new NodeList(9)

head.next = node
node.next = node2
node2.next = node3

function delNode(node) {
  // 将被删除的节点 转移到下一个节点
  node.val = node.next.val
  // 删除下一个节点
  node.next = node.next.next
}
```

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


5-5 83 删除排序链表中重复的元素
1 - 1 - 2
1 - 2
linkedList/deleteDuplicates.js

思路
1 链表是有序的，所有重复元素一定相邻
1. 遍历链表，如果发现当前元素和下一个元素相同，就删除下个元素

解题步骤
1. 遍历链表，如果发现当前元素和下个元素值相同，就删除下个元素值
1. 遍历结束，返回原链表的头部


5-6 环形链表 141
1 - 2 - 0 -4 -》2
思路
1. 两人在圆形操场上起点同时起跑，速度快的人一定超多速度慢的一圈
1. 用一快一慢两个指针遍历链表，如果指针能够相逢，那么链表就存在有圈

步骤
1. 用一快一慢两个指针遍历链表，如果指针能够相逢，就返回true 
1. 遍历结束后，还没又相逢就返回 false
linkedList/hasCycle.js

5-7 js 中的原型链
1. 原型链 本质是链表
1. 原型链上的节点是各种原型对象。比如 Function.prototype\Object.prototype
1. 原型链通过 proto 属性链接各种原型对象

原型链长啥样？
obj => Object.prototype => null
func => Function.prototype => Object.prototype => null
arr => Array.prototype => Object.prototype => null

linkedList/proto.js

原型链知识点
1. 如果A 沿着原型链能找到 B.prototype 对象，那么 A instanceof B 为 true
1. 如何在 A 对象上没有找到 x 属性，那么会沿着原型链找 x 属性

面试题
1. instanceof 原理，并用代码实现
知识点，1
遍历A 的原型链，如果找到 B.prototype,返回true 否则返回 false

2. var foo = {}, F = function() {}
Object.prototype.a = 'value a'
Function.prototype.b = 'value b'
foo.a // value a
foo.b // undefined
F.a // value a
F.b // value b
知识点 2 
解法 明确foo 和 F 遍历的原型链，沿着原型链找 a 属性 b 属性

5-8 前端与链表，使用链表指针获取JSON的节点值
linkedLinst/json.js

5-9 summary
1. 链表里的元素不是连续的，通过 next 链接
1. js 没有链表，可以用 object 模拟
1. 链表常用操作 修改next 遍历链表
1. js 原型链 也是链表
1. 使用链表指针获取JSon 的节点值

6-1 集合
1. 无序且唯一 数据结构
1. ES6 集合 Set
1. 操作：去重，判断某元素是否在集合中，求交集

set/index.js

6-2 两个数组的交集 349
思路
num1 [1,2,2,1] num2 = [2,2]
[2]

1. 求交集其无序唯一
1. 使用集合

解题步骤
1. 用集合 对 num1 去重
1. 遍历 num1 筛选出 num2也包含的值
set/intersection.js

时间复杂度 看循环 filterO(n) includesO(n) => O(n^2)  O(m * n)
空间复杂度 new Set存储m O(m)

6-3 前端与集合 使用 ES6 的Set
1. 使用 Set 对象：new add delete has size
1. 迭代 Set 多种迭代方法、Set 与 Array 互转、求交集/差集
set/set.js

6-4 集合总结
1. 无序 且唯一的数据结构
1. ES6 有集合 Set
1. 操作 去重，判断某元素是否存在，求交集

7-1 字典
1. 集合类似，字典也是存储 唯一值 的数据结构，但是它是以键值对简直对的形式来存储
1. ES6 中有字典 Map/映射
1. 操作：键值对的增删改查
map/index.js

7-2 两个数组的交集 349
[1，2，2，1]  [2，2]
[2]
思路：
1. 求 nums1 和 nums2 都有的值
1. 用字典建立一个映射关系，记录 nums1 里有的值
1. 遍历 nums2 ，找好 nums1 里也有的值
```
function intersection (nums1, nums2) {
  const map = new Map()
  let res = []
  for (let index in nums1) {
    map.set(nums[index], index)
  }
  for(let index in nums2) {
    if (map.has(nums2[index])) {
      res.push(nums2[index])
      map.delete(nums2[index])
    }
  }
  return res
}
```

步骤
1. 新键一个字典，遍历 muns1 填充字典
1. 遍历 nums2 ，遇到字典里的值就选出，并从字典中删除
map/intersection.js

事件复杂度：先后执行for 循环 nums1 长度 m，nums2 长度 n ：O（m + n）
空间复杂度：O(m)

7-3 有效的括号 20
map/isValid.js
```
function isValid (str) {
  const map = new Map()
  map.set('[', ']')
}

```

7-4 两数之和 1

nums:[2, 7, 11, 15] target:9
nums[0] + nums[1] = 9
返回 [0,1]

```
function twoSum (nums, target) {
  const map = new Map()
  for (let i=0; i<nums.length; i++){
    const cur = nums[i]
    const match = target - nums[i]
    // 匹配元素存在
    if (map.has(match)){
      return [map.get(match), i]
    } else {
      map.set(cur, i)
    }
  }
}
```

1. nums 想象成相亲着
1. 把 targer 想象成匹配条件
1. 用字典建立一个婚姻介绍所，存储相亲着的数字和下标

步骤：
1. 新键一个字典作为婚姻介绍所
1. nums 里的值，逐个来介绍所找对象，没有合适的就先登记着，有合适的就牵手成功
map/towSum.js

时间复杂度：for O(n)
空间复杂度：map O(n) 线性增长
用时间换空间，二分查找

7-5 无重复字符的最长子串 3
输入: s = "abcabcbb"
输出: 3 
解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。

思路：
1. 先找出所有的不包含重复字符的子串
1. 超出长度最大那个个子串，返回其长度即可

步骤：
1. 用双指针维护一个滑动窗口，用来剪切子串
1. 不断一定右指针，遇到重复字符，就把左指针移动到重复字符的下一位
1. 在移动过程中，记录所有窗口的长度，并返回最大值

时间复杂度：for 循环 O(n)
空间复杂度：字典的长度是字符串所有不重复字符的个数m O(m)

7-6 最小覆盖子串 76 困难 （没做出来）
思路：
1. 先找出所有包含 T 的子串
1. 找出长度最小那个子串，返回即可

步骤：
1. 用双指针维护一个滑动窗口
1. 移动右指针，找到包含 T 的子串，移动左指针，尽量减少包含 T 的子串长度
1. 循环上述过程，找出包含 T 的最小子串
输入：s = "ADOBECODEBANC", t = "ABC"
输出："BANC"

7-7 字典总结
技术要点
1. 与集合类似，字典也是一种存储唯一值 的数据结构，但它是以键值对 的形式来存储
1. ES6 中有字典，名为 Map
1. 字典的常用操作：键值对的增删改查


### 8-1 树简介
树是什么？
1. 一种 分层 数据的 抽象模型
1. 前端工作种常见的树包括：DOM
树、级联选择、树形控件

1. js 中没有树，但是可以用 Object 和 Array 构建树
{
  value: 'zhejiang',
  label: 'Zhengjiang',
  children: [
    {
      value: 'hangzhou',
      label: 'Hangzhou',
      children: [
        {
          value: 'xihu',
          label: 'West Lake'
        }
      ]
    }
  ]
}
1. 树的常用操作：深度/广度优先遍历、先中后序遍历

### 8-2 树深度/广度优先遍历
什么是深度/广度优先遍历
1. 深度优先遍历：尽可能深的搜索树的分支 （书，第一章 第一章内容 第二章
1. 广度优先遍历：先访问离根节点最近的节点

深度优先遍历算法口诀 /tree/dfs.js
1. 访问根节点
1. 对根节点的 children 挨个进行深度优先遍历
dfs.js // 深度优先遍历首字母缩写

广度优先遍历算法口诀 /tree/bfs.js
1. 新键一个队列，把根节点入队
1. 把 对头 出队并访问
1. 把 对头 的 children 挨个入队
1. 重复 第二、三步，直到队列为空
```
function bfs (root) {
  const queue = [root]
  while (queue.length) {
    const header = queue.shift()
    console.log(header.val)
    header.children.forEach(item => {
      queue.push(item)
    })
  }
}
```

拓展广度优先遍历：leetCode 二叉树的右视图 /tree/rightSideView.js


总结：
1. 深度优先遍历 就是 递归
1. 广度优先遍历，需要新键一个队列

### 8-3 二叉树先中后序遍历 3种遍历
二叉树是什么？
1. 树 中每个节点最多只能有两个子节点
1. js 通常用 Object 模拟二叉树
```
const binaryTree = {
  val: 1,
  left: {
    val: 2,
    left: null,
    right: null
  },
  right: {
    val: 3,
    left: null,
    right: null
  }
}
```
先序遍历算法口诀 /tree/preorder.js 
1. 访问 根 节点
1. 对 根节点 的 左 子树 进行先序遍历
1. 对 根节点 的 右 子树 进行先序遍历

中序遍历算法口诀 /tree/inorder.js
1. 对 根节点 的 左 子树 进行中序遍历
1. 访问 根 节点
1. 对 根节点 的 右 子树 进行中序遍历

后序遍历算法口诀 /tree/postorder.js
1. 对 根节点 左 子树 进行后序遍历
1. 对 根节点 右 子树 进行后序遍历
1. 访问 根 节点

### 8-4 二叉树 的先中后序遍历（非递归）堆栈模拟递归的过程
tree/preorder.js 
函数里面调用另外一个函数，往栈内推入一个函数，如果函数执行完，栈顶元素释放掉
堆栈模拟递归的过程：
1. 新建一个栈 根节点
1. 访问栈顶元素 
1. 根节点 right 存在 入栈
1. 根节点 left 存在 入栈
1. 在 stack 有值的情况下循环

tree/inorder.js 中序遍历
1. 所有的左子树，丢进栈内
```
const inorder = root => {
  const stack = []
  let p = root
  while (p) {
    stack.push(p)
    p = p.left
  }
}
```
1. 弹出最尽头的左节点，并访问

1. 访问最近头的左节点的右节点，

1. 循环

tree/postorder.js 复杂
1. 后序遍历的顺序倒置：根 右 左
1. 利用先序遍历的算法逻辑，实现逆序的访问
1. 利用栈的后进先出 把先序遍历的顺序倒置重新访问

### 8-5 二叉树 最大深度 104 /tree/maxDepth.js
思路：
1. 求最大深度，考虑使用使用深度优先遍历
1. 在深度优先遍历过程中，记录每个节点所在的层级，找出最大的层级即可

步骤：
1. 新建一个变量，记录最大深度
1. 深度优先变量整棵树，并记录每个节点的层级，同时不断刷新最大深度这个变量
1. 遍历结束后返回最大深度这个变量

时间复杂度：每个节点都遍历 循环了 n 次 O(n)
空间复杂度：函数调用函数，隐形存在的栈，dfs 嵌套的多少层就是二叉树最大深度，最大深度和节点树关系。最坏是等于节点树O(n), O(logn)

### 8-6 二叉树 最小深度 111 /tree/minDepth.js
1. 也是有用深度优先遍历，但是广度优先遍历更适合

思路
1. 求最小深度,考虑使用广度优先遍历。
1. 在广度优先遍历过程中,遇到叶子节点,停止遍历,返回节点层级。

步骤
1. 广度优先遍历整棵树,并记录每个节点的层级
1. 遇到叶子节点,返回节点层级,停止遍历

时间复杂度：遍历每个节点 O(n)
空间复杂度：O(n) n 树的节点树

### 8-7 二叉树 层序遍历 102 /tree/levelOrder.js
思路
1. 层序遍历顺序就是广度优先遍历。
1. 不过在遍历时候需要记录当前节点所处的层级,方便将其添加到不同的数组中。

步骤
1. 广度优先遍历二叉树。
1. 遍历过程中,记录每个节点的层级,并将其添加到不同的数组中。

解法二 
思路
1. 在每次循环里，确保每次 老的节点都出队
1. 并把下一节点（子节点）全部都入队
1. 可以保证，每次循环里，刚进来都是同一层级的节点
1. 每次循环，将同一层级的节点当到一个数组里面，最后加入大数组里面

时间复杂度：O(n)
空间复杂度：线性增长的q O(n)

### 8-8 二叉树中序遍历 94 /tree/inorderTraversal.js

### 8-9 二叉树 路径总和 112 /tree/hasPathSum.js

深度优先遍历dfs：特点 访问当前节点，把所有的子节点都丢到深度优先遍历
思路：
1. 在深度优先遍历的过程中,记录当前路径的节点值的和。
1. 在叶子节点处,判断当前路径的节点值的和是否等于目标值

步骤
1. 深度优先遍历二叉树,在叶子节点处,判断当前路径的节点值的和是否等于目标值,是就返回true。
1. 遍历结束,如果没有匹配,就返回 false。

### 8-10 前端与树 遍历JSON 所有节点值 /tree/json.js
（深度优先遍历）
1. 访问当前节点
1. dfs当前节点的所有子节点

### 8-11 前端与树 渲染 antd 的数组件 /tree/antd.js
深度优先

### 8-12 树章节总结
技术要点
1. 树是一种分层数据的抽象模型,在前端广泛应用。
1. 树的常用操作:深度/广度优先遍历、先中后序遍历

9-1 图 简介
图是什么
1. 图是 网络结构 的抽象模型，是一组由 边 连接的节点
1. 图可以表示任何二元关系,比如道路、航班.
1. js 中没有图， 但是可以用 Object 和 Array 构建图
1. 图的表示法：邻接矩阵、邻接表、关联矩阵.


A 邻接 B 交叉位置 为1
第一行 代表 A，第二列 代表 B 节点
``` 邻接矩阵
  A B C D E
A 0 1 0 0 0
B 0 0 1 1 0
C 0 0 0 0 1
D 1 0 0 0 0
E 0 0 0 1 0
```

``` 邻接表
{
  A: ['B'],
  B: ['C', 'D'],
  C: ['E'],
  D: ['A'],
  E: ['D']
}

```
图的常用操作
1. 深度优先遍历
1. 广度优先遍历

9-2 图的深度广度优先遍历
什么是深度/广度优先遍历
1. 深度优先遍历：尽可能深的搜索图的分支
1. 广度优先遍历：先访问离根节点 最近的节点

深度优先遍历算法口诀
1. 访问 根节点
1. 对 根节点 的没有访问过的相邻节点 挨个进行深度优先遍历
/graph/graph.js
/graph/dfs.js



广度优先遍历算法口诀
1. 新建一个队列，把 根节点 入队
1. 把 对头 出队并访问
1. 把 对头 的 没访问过的相邻节点入队
1. 重复 第二 三步，直到队列为空
/graph/bfs.js
 

9-3 有效数字 65
思路
1. 这些节点分别代替字符串的8种状态
1. 只有3、5、6 三种状态是合法的数字
1. 状态直接是可以相互转变的
1. 空字符串 状态：0

步骤
1. 构建一个表示状态的图
1. 遍历字符串，沿着图走，如果到了某个节点无路可走，返回false
1. 遍历结束，如果走到3、5、6 中的某一状态，返回true，否则返回false
/graph/isNumber.js

9-4 太平洋大西洋水流问题 难度中等， 比较难 417

9-5 克隆图 133

9-6 图 总结
1. 图是 网络结构 的抽象模型，是一组由 边 连接的 节点
1. 图可以表示任何二元关系,比如道路、航班。
1. JS中没有图,但是可以用 Object和 Array构建图。
1. 图的表示法:邻接矩阵、邻接表
1. 图的常用操作:深度/广度优先遍历。

### 10-1 堆
1. 堆是一种特殊的完全二叉树。
1. 所有的节点都大于等于(最大堆)或小于等于(最小堆)它的子节点。

JS 中的堆
1. JS中通常用数组表示堆。
1. 任意节点的左侧子节点的位置是：2 * index + 1
1. 任意节点的右侧子节点的位置是：2 * index + 2
1. 父节点位置是（index-1）/ 2 的商 
广度优先顺序遍历:[1,3,6,5,9,8]

堆的应用
1. 堆能高效、快速地找出最大值和最小值（堆顶）,时间复杂度:O(1)
1. 找出第K个最大(小)元素。

第 K 个最大元素
1. 构建一个最小堆,并将元素依次插入堆中。
1. 当堆的容量超过K,就删除堆顶。
1. 插入结束后,堆顶就是第K个最大元素。

### 10-2 js 实现最小 堆类
1. 在类里，声明一个数组，用来装载元素
1. 主要方法：插入、删除堆顶，获取堆顶、获取堆大小

/heap/MinHeap.js

插入
1. 将值插入堆的底部,即数组的尾部。
1. 然后上移:将这个值和它的父节点进行交換,直到父节点小于等于这个插入的值。
1. 大小为k的堆中插入元素的时间复杂度为o(logk)。

swap(i1, i2) {
  const temp = this.heap[i1]
  this.heap[i1] = this.heap[i2]
  this.heap[i2] = temp
}
getParentIndex(i) {
  return Math.floor((i-1)/2) // 或者
  return (i - 1) >> 1 // 二进制操作， 把二进制数据往右移动一位，相当于除以2
}
shiftUp(index) {
  if(index === 0) return
  // 不停和父节点交换
  // 获取父节点
  const parentIndex = this.getParentIndex(index)
  // 比较
  if (this.heap[parentIndex] > this.heap[index]) {
    this.swap(parentIndex, index)
    this.shiftUp(parentIndex)
  }
}
insert (value) {
  this.heap.push(value)
  // 上移
  this.shiftUp(this.heap.length - 1)
}

 删除堆顶
 1. 用数组尾部元素替换堆顶(直接删除堆页会破坏堆结构)。
 1. 然后下移:将新堆顶和它的子节点进行交換,直到子节点大于等于这个新堆顶。
 1. 大小为k的雄中删除堆页的时间复杂度为o(logk)。


 ### 11-1 排序和搜索
 1. 排序；把某个乱序的数组变成升序或者降序的数组
 1. 搜索；找出数组中某个元素的下边

 Js 中的排序和搜索
 1. 排序；数组的sort方法
 1. 搜索；数组的indexOf方法

 排序算法
 1. 冒泡排序
 1. 选择排序
 1. 插入排序
 1. 归并排序
 1. 快速排序

 搜索算法
 1. 顺序搜索
 1. 二分搜索

### 11-2 冒泡排序
特点：简单、性能不好

冒泡排序的思路：
1. 比较所有相邻元素，如果第一个比第二个大，则交换他们
1. 一轮下来，可以保证最后一个数是最大的
1. 执行 n-1 轮，就可以完成排序

冒泡排序动画
https://visualgo.net/zh

``` /sort/bubbleSort.js
Array.prototype.bubbleSort = function() {
  console.log(this)
  3. for (let i=0; i<this.length-1; i++) {
    1. for (let j=0; j<this.length-1 - i; j++) {
      this[j] this[j+1]
      2. 选择性交换
      if (this[j] > this[j+1]){
        temp = this[j]
        this[j] = this[j+1]
        this[j+1] = temp
      }
    }
  }
}

const arr = [5,4,3,2,1]
arr.bubbleSort()

```
冒泡排序的时间复杂度
1. 两个嵌套循环
1. 时间复杂度；O(n^2)

11-3 选择排序
特点；简单、性能不好
思路
1. 找到数组中的最小值，选中它并将其放置在第一位
1. 接着找到第二小的值，选中它并将其放置在第二位
1. 依次类推，执行 n-1 轮

选择排序的动画 

```/srot/selectionSort.js

```

选择排序的时间复杂度
1. 两个嵌套循环
1. 时间复杂度；O(n^2)