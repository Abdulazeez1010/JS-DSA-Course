// Frequency Counter - validAnagram
// Given two strings, write a function to determine if the 
// second string is an anagram of the first. An anagram is a word, 
//     phrase, or name formed by rearranging the letters of another, 
//     such as cinema, formed from iceman.

// Examples:

// validAnagram('', '') // true
// validAnagram('aaz', 'zza') // false
// validAnagram('anagram', 'nagaram') // true
// validAnagram("rat","car") // false) // false
// validAnagram('awesome', 'awesom') // false
// validAnagram('amanaplanacanalpanama', 'acanalmanplanpamana') // false
// validAnagram('qwerty', 'qeywrt') // true
// validAnagram('texttwisttime', 'timetwisttext') // true


// My solution

function validAnagram(s1, s2) {
    // Return false if lengths are not equal
    if (s1.length !== s2.length) return false;
    
    // Create two empty object
    let firstString = {}
    let secondString = {}

    // Loop through the first string
    for (char of s1) {
        // Store the occurence of a char and the count
        firstString[char] = (firstString[char] || 0) + 1;
    }

    // Loop through the second string
    for (char of s2) {
        // Store the occurence of a char and the count
        secondString[char] = (secondString[char] || 0) + 1;
    }

    for (let key in firstString) {
        if (firstString[key] !== secondString[key]) return false;
    }
    return true;
}


// Colt's solution

function validAnagram(first, second) {
    if (first.length !== second.length) return false;

    const lookup = {};

    for (let i = 0; i < first.length; i++) {
        let letter = first[i];
        lookUp[letter] ? lookUp[letter] += 1 : lookUp[letter] = 1;
    }

    for (let i = 0; i < second.length; i++) {
        let letter = second[i];
        if (!lookUp[letter]) {
            return false;
        } else {
            lookUp[letter] -= 1;
        }
    }
    return true;
}