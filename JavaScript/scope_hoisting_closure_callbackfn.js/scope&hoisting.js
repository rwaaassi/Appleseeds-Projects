// 1
console.log(a);
var a = 5;
// output: undefined
console.log(b);
let b = 5;
// output: can't access before initialization
console.log(c); 
const c = 5;
// output: can't access before initialization

// 2
console.log(myFuncDecl()); // What will be the output?
function myFuncDecl() {
  return "Hello from function declaration!";
}
// output: hello from function declaration
console.log(myFuncExpr()); // What will be the output?
var myFuncExpr = function () {
  return "Hello from function expression!";
};
// output: undefined

// 3
const x = "global";
function outerFunc() {
  let y = "outer";
  function innerFunc() {
    var z = "inner";
    console.log(x); // What will be the output? 
    // "global"
    console.log(y); // What will be the output?
    // "outer"
  }
  innerFunc();
  console.log(z); // What will be the output?
//   z not defined
}
outerFunc();

// 4
const a = 1;
function b() {
  const a = 10;
  c();
  return;
  function c() {
    console.log(a); // What will be the output?
    // 10
  }
}
b();
console.log(a); // What will be the output of a?
// 1
foo();
function foo() {
  console.log(x); // What will be the output?
//   undefined
  var x = "Hello, world!";
  bar();
  function bar() {
    console.log(x); // What will be the output?
    // can't access before initialization
    let x = "Hello, scope!";
  }
}