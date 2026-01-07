//promises chaining:to create more promises(one after another)
const ticketBooking = () => {
  return new Promise((resolve, reject) => {
    resolve(" Ticket booked");
  });
};
const popcorn = (msg) => {
  return new Promise((resolve, reject) => {
    resolve(msg + " buy popcorn");
  });
};
const coke = (msg) => {
  return new Promise((resolve, reject) => {
    resolve(msg + " buy coke");
  });
};
ticketBooking()
  .then((result) => {
    return popcorn(result);
  })
  .then((result) => {
    return coke(result);
  })
  .then((result) => {
    console.log("wannna to go movie" + result);
  })
  .catch((error) => {
    console.log(error);
  });
