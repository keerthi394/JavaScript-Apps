//call method
const pInfo = {
  pDetails: function (rating, price) {
    return this.pId + " " + this.pName + " " + rating + " " + price;
  },
};

const product = {
  pId: 1001,
  pName: "Iphone",
};
console.log(pInfo.pDetails.call(product, 4, 100000));
