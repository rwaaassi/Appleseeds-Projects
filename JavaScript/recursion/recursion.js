// 1
function sumOfNaturalNumbers (n) {
    if (n<= 0) {
     return undefined; 
    }
    else if (n=== 0) {
        return 0
    }
    else if (n === 1) {
      return 1  
    }
    return n + sumOfNaturalNumbers(n-1)
}
console.log(sumOfNaturalNumbers(10));

// 2
function reverseString (str) {
if (str.length === 0) {
    return undefined
}
else if (str.length === 1) {
    return str
}
 return reverseString(str.slice(1)) + str.charAt(0);
}
console.log(reverseString("hello"));

// 3
function countDown (n) {
    if (n <= 0) {
        return;
    }
   
   console.log(n)
   countDown(--n)
}
countDown(5);

//4

function printAnArray (arr, index = 0) {
if (index >= arr.length) {
 return 
}
console.log(arr[index]);
printAnArray(arr, ++index)
}
printAnArray([1,2,3])
printAnArray(["rwaa", "amjad", "hussein", "omar"])