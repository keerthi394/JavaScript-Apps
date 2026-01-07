//bind method
const movieInfo = {
  movieDetails: function () {
    return this.heroname + " " + this.villianname;
  },
};
const pushpa = {
  heroname: "allu arjun",
  villianname: "fahad fassile",
};
let res = movieInfo.movieDetails.bind(pushpa);
console.log(res());
