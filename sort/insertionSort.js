const arr = [3,2,4,5,1]

Array.prototype.insertionSort = function() {

  for (let i=1; i<this.length; i++) {

    const temp = this[i]
    let p = i
    while (p>0) {
      if (this[p-1] > temp) {
        this[p] = this[p-1]
      } else {
        break;
      }
      p -= 1
    }
    this[p] = temp
  }
}

arr.insertionSort()