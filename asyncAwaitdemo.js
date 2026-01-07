//async await was indroduced to overcome difficult in promises that recently we used promises with .then and .catch but here it was maked simply in ES7 with async await
const movieRating = () => {
  return new Promise((resolve, reject) => {
    let rating = 4.5;
    if (rating > 4) {
      resolve("good movie");
    } else {
      reject("boss waste of our time");
    }
  });
};
//how to call promise with async await
const movieResult = async () => {
  try {
    const result = await movieRating();
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};
movieResult();
