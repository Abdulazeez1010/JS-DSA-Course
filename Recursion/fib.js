// Write a recursive function called fib which accepts
// a number and returns the nth number in the Fibonacci
// sequence. Recall that the Fibonacci sequence is the
// sequence of whole numbers 1, 1, 2, 3, 5, 8, ...
// which starts with 1 and 1, and where every number
// thereafter is equal to the sum of the previous two
// numbers.

// fib(4) // 3
// fib(10) // 55
// fib(28) // 317811
// fib(35) // 9227465

// Using a loop
function fib(n){
  // add whatever parameters you deem necessary - good luck!
  let prev = 0;
  let curr = 1;
  let temp;
  while (n > 2) {
      temp = curr;
      curr = curr + prev;
      prev = temp;
      n--;
  }
  return prev + curr;
}

// Using recursion
function fib(n){
    let prev = 0;
    let curr = 1
    let temp;
    
    function helper(n) {
        if (n === 2) return 1;
        temp = curr;
        curr = curr + prev;
        prev = temp;
        return prev + helper(n - 1)
    }
    return helper(n);
}


// Colt's solution
function fib(n){
    if (n <= 2) return 1;
    return fib(n-1) + fib(n-2);
}