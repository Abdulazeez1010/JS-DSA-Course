// function selectionSort(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         // initialise min with the current element
//         let min = arr[i];
//         for (j = i; j < arr.length; j++) {
//             // update the minimum for each iteration
//             min = Math.min(min, arr[j])
//         }
//         // check if the current element is > than min
//         if(arr[i] > min) {
//             //swap
//             let idx = arr.indexOf(min);
//             [arr[i], arr[idx]] = [arr[idx], arr[i]]
//         }
//     }
//     // return the array
//     return arr;
// }



function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        // initialise min with the current element
        let min = arr[i];
        let idx;
        for (j = i + 1; j < arr.length; j++) {
            // update the minimum for each iteration
            if (arr[j] < min) {
                min = arr[j]
                // store the index of the minimum
                idx = j;
            }
        }
        // check if the current element is > than min
        if(arr[i] > min) {
            //swap
            [arr[i], arr[idx]] = [arr[idx], arr[i]]
        }
    }
    // return the array
    return arr;
}


// COLT'S SOLUTION
function selectionSort(arr) {
    for (var i = 0; i < arr.length; i++) {
        var lowest = i;
        for (var j = i+1; j < arr.length; j++) {
            if (arr[j] < arr[lowest]) {
                lowest = j;
            }
        }
        if (i !== lowest) {
            var temp = arr[i];
            arr[i] = arr[lowest];
            arr[lowest] = temp;
        }
    }
    return arr;
}



function selectionSort(arr) {
    const swap = (arr, idx1, idx2) => 
        ([arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]])

    for (let i = 0; i < arr.length; i++) {
        let lowest = i;
        for (let j = i+1; j < arr.length; j++) {
            if (arr[lowest] < arr[j]) {
                lowest = j;
            }
        }
        if (i !== lowest) swap(arr, i, lowest)
    }
    return arr;
}


