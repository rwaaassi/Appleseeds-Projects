// ex1.1 Yes or No
const m = (val) => (val % 2 == 0 ? "Yes" : "No");
console.log(m(3));

// ex2.1 Sum of lowest number
const array = [20, 3, 17, 50];
function sumOfLowest(arr) {
  for (sum of array) {
    array.sort((a, b) => a - b);
    sum = array.slice(0, 2);

    console.log(sum[0] + sum[1]);
    break;
  }
}
sumOfLowest();

// ex2.2 One and Zero - Binary
const arr = [1, 0, 0, 1, 1];
let arr1 = arr.reverse();
arr1.forEach((n, index) => {
  arr1[index] = n * 2;
});
let output = 0;
for (let i = 0; i < arr1.length; i++) {
  output += Math.pow(arr1[i], i);
}
console.log(output);

// ex2.3 find the next perfect square
function findNextSquare(n) {
  let r = Math.sqrt(n);
  let next = Math.pow(r + 1, 2);
  // console.log(next);
  // console.log(next / (r + 1));
  if (next % (r + 1) == 0) {
    console.log(next);
  } else {
    console.log(-1);
  }
}
console.log(findNextSquare(121));

// ex2.4 unique
const unique = [2, 2, 2, 4, 2, 2];
let newArr = unique.reduce((acc, curr) => {
  if (!acc[curr]) {
    acc[curr] = 1;
  } else {
    acc[curr]++;
  }
  return acc;
}, {});
// console.log(newArr);
if (Object.values(newArr) == 1) {
  console.log(Object.keys(newArr));
}
// t = Object.values(newArr);
// let k = [];
// for (let i = 0; i < t.length; i++) {
//   if (t[i] == 1) {
//     k.push(t[i]);
//   }
// }
// console.log(k);

// ex2.5 Summation
function summation(n) {
  while (n = 8) {
    r = n - 1 
    if (n-1 ) {
      
    }
  }
  let arr = [];
  if (n ) {
    n - 1
  }
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
  }
}
summation(8);

// ex2.6 years and centuries

