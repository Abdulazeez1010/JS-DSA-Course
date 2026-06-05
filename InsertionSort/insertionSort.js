function insertionSort(arr) {
  // loop through the array, start from the second element i = 1
  for (let i = 1; i < arr.length; i++) {
    // loop from j = i - 1 to the beginning of the array
    let k = i;
    for (let j = i - 1; j >= 0; j--) {
      // compare i and the j
      // if i < j swap
      if (arr[k] < arr[j]) {
        [arr[k], arr[j]] = [arr[j], arr[k]];
        k--;
      } else {
        break;
      }
    }
  }
  // return arr
  return arr;
}



// COLT'S SOLUTION
function insertionSort(arr) {
    for (var i = 1; i < arr.length; i++) {
        var currentVal = arr[i];
        for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
            arr[j+1] = arr[j];           
        }
        arr[j+1] = currentVal;
    }
    return arr;
}