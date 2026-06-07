function merge(arr1, arr2) {
    // find sum of the two arrays
    let len = arr1.length + arr2.length;
    // create an empty array called mergeSort
    let mergeSort = [];
    // loop until the mergeSort length equal sum of the two arrays
    for (let i = 0, j = 0; mergeSort.length < len;) {
        // save the current element of the arrays in diff variables
        let arr1Curr = arr1[i];
        let arr2Curr = arr2[j];
        // if the current element of any array is less than the
        // current of the other or if the other array element is undefined,
        // push it into mergeSort and increment the index and vice versa.
        if (arr1Curr < arr2Curr || arr2Curr === undefined) {
            mergeSort.push(arr1Curr);
            i++;
        } else if (arr1Curr >= arr2Curr || arr1Curr === undefined) {
            mergeSort.push(arr2Curr);
            j++;
        }
    }
    // return the mergeSort array
    return mergeSort;
}



// COLT'S SOLUTION
function merge(arr1, arr2) {
    let results = [];
    let i = 0;
    let j = 0;
    while (i < arr1.length && j < arr2.length) {
        if (arr2[j] > arr1[i]) {
            results.push(arr1[i]);
            i++;
        } else {
            results.push(arr2[j]);
            j++;
        }
    }

    while (i < arr1.length) {
        results.push(arr1[i]);
        i++;
    }
    while (j < arr2.length) {
        results.push(arr2[j]);
        j++;
    }

    return results;
}