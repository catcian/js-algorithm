var RecentCounter = function () {
  // 构造函数 队列挂载this
  this.queue = []
}

RecentCounter.prototype.ping = function (t) {
  this.queue.push(t)
  // 判断队头元素 是否在 t时刻3000ms 内
  while (this.queue[0] < t - 3000){
    // 不在 对头元素出队
    this.queue.shift()
  }
  return this.queue.length
}

// [[],[642],[1849],[4921],[5936],[5957]]
// [null,1,2,1,2,3]
var rc = new RecentCounter()
console.log(rc.ping(642))
console.log(rc.ping(1849))
console.log(rc.ping(4921))
