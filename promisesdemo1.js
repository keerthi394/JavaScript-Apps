let num = Math.floor(Math.random() * 10) + 1; //generating random no from 1 to 10
console.log(num);
const bubbleGame = new Promise((resolve, reject) => {
  if (num >= 5) {
    resolve("high score");
  } else {
    reject("low score");
  }
});
//call promises
bubbleGame
  .then((result) => {
    //.then used to resolve
    console.log(result);
  })

  .catch((result) => {
    //.catch used to reject
    console.log(result);
  });
