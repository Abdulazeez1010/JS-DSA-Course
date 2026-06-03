function selectionSort(arr, compararator){
  // add whatever parameters you deem necessary - good luck!
  if (typeof compararator !== 'function') {
      compararator = (a, b) => a - b;
  }
  
  for (let i = 0; i < arr.length; i++) {
        let min = arr[i];
        let idx;
        for (let j = i + 1; j < arr.length; j++) {
            if (compararator(arr[j], min) < 0) {
                min = arr[j];
                idx = j;
            }
        }
        if(compararator(arr[i], min) > 0) {
            [arr[i], arr[idx]] = [arr[idx], arr[i]];
        }
    }
    return arr;
}
