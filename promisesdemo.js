//promises  logic in js introduced in ES6
const movieRating = new Promise((resolve, reject) => {
  let rating = 3.5;
  if (rating > 4) {
    resolve("good movie");
  } else {
    reject("boss waste of our time");
  }
});
//call promises
movieRating
  .then((result) => {
    //.then used to resolve
    console.log(result);
  })

  .catch((result) => {
    //.catch used to reject
    console.log(result);
  });
