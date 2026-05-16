// Implement a function called countUniqueValues,
// which accepts a sorted array, and counts the unique values in the array.
// There can be negative values in the array, but it will always be sorted.

// MY SOLUTION
function countUniqueValues(arr) {
    // Initialize two pointers left and right
    let left = 0;
    let right = 1;
    // Initialize count at 0
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        // If left is not equal to right, increment count
        if (arr[left] !== arr[right]) {
            count++;
        }
        // Increment left and right;
        left++;
        right++;
    }
    // Return count
    return count;
}

// COLT'S SOLUTION
function countUniqueValues(arr) {
    if (arr.length === 0) return 0;
    let i = 0;
    for (let j = 1; j < arr.length; j++) {
        if (arr[i] != arr[j]) {
            i++;
            arr[i] = arr[j];
        }
    }
    return i + 1;
}