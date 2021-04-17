Array.prototype.selectionSort = function() {

  for (let i=0; i<this.length; i++) {
    // 1 let indexMin = 0
    let indexMin = i
    for (let j=i; j<this.length-1; j++) {
      if (this[indexMin] > this[j+1]) {
        indexMin = j+1
      }
    }

    if (i !== indexMin) {
      const temp = this[i]
      this[i] = this[indexMin]
      this[indexMin] = temp
    }
  }
}

const arr = [5,4,3,2,1]
arr.selectionSort()

