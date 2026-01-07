//objects in js
const movieInfo = {
  title: "Akanda2",
  hero: "Balayya",
  director: "Boyapati",
};
//how to get
console.log(movieInfo.director); //key-dot property
console.log(movieInfo["hero"]); //square braces
//for in
console.log("---get all values---");
for (let info in movieInfo) {
  console.log(movieInfo[info]);
}

//ADVANCED METHODS
//Object.keys----used to retrive all property names
console.log("----only properties-----");
Object.keys(movieInfo).forEach((key) => {
  console.log(key);
});

//Object.values----used to retrive only values
console.log("---only Values-----");
Object.values(movieInfo).forEach((values) => {
  console.log(values);
});

//Object.entries----used to get both key and values
console.log("----Both-----");
Object.entries(movieInfo).forEach((entries) => {
  console.log(entries[0] + " : " + entries[1]);
});

//using for of loop
console.log("-----both-----");
for (let [info, infoval] of Object.entries(movieInfo)) {
  console.log(info + " : " + infoval);
}

//nested objects
const myObj = {
  name: "John",
  age: 30,
  cars: [
    { name: "Ford", models: ["Fiesta", "Focus", "Mustang"] },
    { name: "BMW", models: ["320", "X3", "X5"] },
    { name: "Fiat", models: ["500", "Panda"] },
  ],
};
//using arrays
console.log(myObj.cars[0].models);

//CART OBJECTS
const cartItems = {
  products: [
    { pid: 1, pname: "drone", price: 12982 },
    { pid: 2, name: "ac", price: 2131 },
  ],
  shippingAddress: {
    street: "sangad",
    pincode: 5423,
    areaname: "sdad",
  },
  userInfo: { userid: 2e9872, username: "dsjgjsffg" },
};
console.log(cartItems.userInfo.username);
