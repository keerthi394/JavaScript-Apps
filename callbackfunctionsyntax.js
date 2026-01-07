//call back function as anonumous function(nameless function)
let prices = ["20000", "30000", "40000", "50000"];
const newprices = prices.map((val) => {
  return val - 5000;
});
console.log(newprices);
//call back function with name
function sample() {
  console.log("Hi");
}
function demo(callback) {
  return callback;
}
demo(sample());
