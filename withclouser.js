//with clouser
const counterres = (() => {
  let counter = 0;
  return function () {
    counter += 1;
    return counter;
  };
})(); //self -invoking
console.log(counterres());
console.log(counterres());
console.log(counterres());
