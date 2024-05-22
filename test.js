// It's pretty straightforward. Your goal is to create a function that removes the first and last
// characters of a string. You're given one parameter, the original string. You don't have to worry
// with strings with less than two characters.

const str = "hello"
function removeString (string) {
  // const str2 = string.split()


console.log(string.substring(1,4));
// console.log(str2.shift() && str2.unshift());
}
removeString(str)
console.log();

// Write a function named `getSumOfNumbers` that takes an array of numbers and returns the sum of all the numbers.

function getSumOfNumbers (arr) {
const sum =  arr.reduce((acc, val) => 
  acc + val
, 0 )
return sum
}

console.log(getSumOfNumbers([1, 2, 3, 4, 5]));
