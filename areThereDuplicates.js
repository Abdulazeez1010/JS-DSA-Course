// Frequency Counter / Multiple Pointers - areThereDuplicates
// Implement a function called, areThereDuplicates 
// which accepts a variable number of arguments, and
// checks whether there are any duplicates among the
// arguments passed in.  You can solve this using the
// frequency counter pattern OR the multiple pointers
// pattern.

// Examples:

// areThereDuplicates(1, 2, 3) // false
// areThereDuplicates(1, 2, 2) // true 
// areThereDuplicates('a', 'b', 'c', 'a') // true 
// Restrictions:

// Time - O(n)
// Space - O(n)

// Bonus:
// Time - O(n log n)
// Space - O(1)


function areThereDuplicates() {
  // good luck. (supply any arguments you deem necessary.)
  // Create an empty Object
  let inputs = {};
  // Loop through the arguments and save in the Object
  for (let i = 0; i < arguments.length; i++) {
      let val = arguments[i];
      inputs[val] ? inputs[val] += 1: inputs[val] = 1;
  }
  
  // Loop through the Object
  for (let val in inputs){
      // check if any occurs more than once
      if (inputs[val] >= 2) return true;
  }
  
  return false;
}