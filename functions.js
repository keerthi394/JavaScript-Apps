//functions in js
function showMessage() {
  console.log("sabiha");
}
showMessage();
//function with parameters
function sumOfNumbers(a, b) {
  console.log(a + b);
}
sumOfNumbers(10, 20); //here 10,20 (values) are arguments and a,b are parameters
//return a value from function
function mulOfNumbers(a, b) {
  return a * b;
}
let x = mulOfNumbers(10, 20);
console.log(x);
//ES6 new functions(arrow function)
const arrowDemo = () => {
  console.log("arrow function demo");
};
arrowDemo();
//arrow function with parameters
const addNumbers = (a, b) => {
  console.log(a + b);
};
addNumbers(20, 30);
//in a simple way
const addNums1 = (num1, num2) => num1 + num2;
let ans = addNums1(10, 20);
console.log(ans);
//with return
const mulNums1 = (num1, num2) => {
  return num1 * num2;
};
let res = mulNums1(10, 20);
console.log(mulNums1(10, 20));
//without return
const mulNums2 = (num1, num2) => num1 * num2;
let res1 = mulNums2(10, 20);
console.log(res1);
//rest perameter
const printNumbers = (a, b, ...c) => {
  console.log(a);
  console.log(b);
  console.log(...c);
};
printNumbers(10, 20, 30, 40, 50);
//default perameters
const sumNumbers = (a, b = 10) => {
  console.log(a + b);
};
sumNumbers(20);
