function insertionSort(arr, comparator){
  // add whatever parameters you deem necessary - good luck!
  if (typeof comparator !== 'function') {
      comparator = (a, b) => a - b;
  }
  
  for (let i = 1; i < arr.length; i++) {
    let k = i;
    for (let j = i - 1; j >= 0; j--) {
      if (comparator(arr[k], arr[j]) < 0) {
        [arr[k], arr[j]] = [arr[j], arr[k]];
        k--;
      } else {
        break;
      }
    }
  }
  return arr;
}