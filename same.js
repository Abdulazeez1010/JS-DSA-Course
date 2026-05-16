// Write a function same accepts two arrays
// return true if every value in the array has its corresponding value squared in the second array
// frequency of values must be the same

// Examples
// same([1,2,3], [4,1,9])
// 

// My Solution

function same(arr1, arr2) {
	let x = arr1;
	let y = arr2;
	// if the length of the two arrays are not equal, return false
	if (x.length !== y.length) return false;
	// Loop through the first array
	for (let i = 0; i < x.length; i++) {
		// Square the current number
		let check = x[i] ** 2;
		// Loop through the second array to see if the square exists
		if (y.some(n => n === check)){
			// If it exists, remove it from the array and update the second array
			// y = y.filter(n => n !== check);
			for (let j = 0; j < y.length; j++) {
				if(y[j] === check){
					y.splice(j, 1);
				}
			}
		} else {
				// If it doesn't, return false
				return false;
		}   
	}
	// Return true at the end of the function
	return true;
}


// Colt's solution
function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
		return false;
	}
	for (let i = 0; i < arr1.length; i++) {
		let correctIndex = arr2.indexOf(arr1[i] ** 2);
		if (correctIndex === -1) {
			return false;
		}
		arr2.splice(correctIndex, 1);
	}
	return true;
}







