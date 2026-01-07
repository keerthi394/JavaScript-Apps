//with out clouser
let counter = 1; //global variable
const counterres = () => {
  let counter = 0; //local variable:first priority
  counter += 1;
  return counter;
};
console.log(counterres());
console.log(counterres());
console.log(counterres());
