class Sorter {
  constructor() {
    this.arr = [];
    this.comparator = (a,b) => a - b;
  }

  add(element) {
    this.arr.push(element);
  }

  at(index) {
    return this.arr[index];
  }

  get length() {
    return this.arr.length;
  }

  toArray() {
    return this.arr;
  }

  sort(indices) {
    let cloneArr = [];
    indices.sort();

    for ( let i = 0, length = indices.length; i < length; i++) {
      cloneArr.push(this.arr[indices[i]]);
    }

    cloneArr.sort(this.comparator);
      
    for (let j = 0, length = indices.length; j < length; j++) {
        this.arr[indices[j]]=cloneArr[j];
    }

  }
  
  setComparator(compareFunction) {
    this.comparator = compareFunction;
  }
}

module.exports = Sorter;