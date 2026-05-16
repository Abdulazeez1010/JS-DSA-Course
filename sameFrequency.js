// Frequency Counter - sameFrequency
// Write a function called sameFrequency.
// Given two positive integers, find out if the two
// numbers have the same frequency of digits.

// Your solution MUST have the following complexities:

// Time: O(N)

function sameFrequency(num1, num2){
  // good luck. Add any arguments you deem necessary.
    //   Create two empty Objects
    let numOneFrequency = {};
    let numTwoFrequency = {};
    // Chop off the unit of the numbers and save in the objects
    while (num1 > 0) {
        let unit = num1 % 10;
        numOneFrequency[unit] ? numOneFrequency[unit]+=1 : numOneFrequency[unit] = 1;
        num1 = Math.floor(num1 / 10);
    }
    
    while (num2 > 0) {
        let unit = num2 % 10;
        numTwoFrequency[unit] ? numTwoFrequency[unit]+=1 : numTwoFrequency[unit] = 1;
        num2 = Math.floor(num2 / 10);
    }
    
    // Loop through one of the object and compare with the other object
    for (let num in numOneFrequency) {
        // check if they have the same keys
        if (!(num in numTwoFrequency)) {
            return false
        }
        // check if the keys have the same value
        if (numOneFrequency[num] !== numTwoFrequency[num]) {
            return false;
        }
    }
    // Return true at the end
    return true;
}