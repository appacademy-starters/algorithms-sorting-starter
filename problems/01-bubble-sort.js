// Implement Bubble Sort

function swap(array, idx1, idx2) {
  let temp = array[idx1];
  array[idx1] = array[idx2];
  array[idx2] = temp;
  return array
}

function bubbleSort(array) {
  debugger
  // your code here
  let swapped = true;

  while(swapped) {
    swapped = false;
    for (let i = 0; i < array.length; i++) {

      let el = array[i];
      let next = array[i+1];

      // (el > next) ? swap(array, i, i + 1) && swapped === true : el === el && next === next;
      if (el > next) {
        array = swap(array, i , i+1)
        swapped = true
      }

    }
  }
  return array
}
debugger
let arr = [2, -1, 4, 3, 7, 3] // 
bubbleSort(arr)


module.exports = {
  bubbleSort,
  swap
};
