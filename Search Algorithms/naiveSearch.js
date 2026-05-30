// MY SOLUTION
function searchNaiveString(str1, str2) {
    // initialize a counter
    let count = 0;
    // loop through the first string
    for (let i = 0; i < str1.length; i++) {
        // check if str1[i] === str2[0]
        if (str1[i] === str2[0]) {
            // if so, initialize k starting at i
            let k = i;
            // and loop through the second string
            for (let j = 0; j < str2.length; j++) {
                // check if str1[k] === str2[j] all through
                if (str1[k] !== str2[j]) break;
                if (j === str2.length - 1) count++;
                k++;
            }
        }
    }
    return count;
}


// Colt's Solution
function naiveSearch(long, short) {
    var count = 0;
    for (var i = 0; i < long.length; i++) {
        for (j = 0; j < short.length; j++) {
            if (short[j] !== long[i+j]) break;
            if (j === short.length - 1) count++;
        }
    }
    return count;
}
