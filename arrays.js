//Arrays in js
//ways to create array
//1
let p_names = ["realme", "redmi", "vivo", "samsung"]; //literal syntax
//2

let prices = new Array("20000", "30000", "40000", "50000"); //Object syntax
//to get array values
console.log(p_names[2]);
for (let names of p_names) {
  console.log(names);
}
//using for each method
let names = p_names.forEach((val) => {
  console.log(val);
});
// to add elements
//push method,splice method,unshift method
p_names.push("oneplus"); //used to add elements at last
for (let names of p_names) {
  console.log(names);
}
p_names.unshift("poco"); //used to add element in starting position
for (let names of p_names) {
  console.log(names);
}
p_names.splice(2, 0, "nokio", "oppo");
for (let names of p_names) {
  console.log(names);
}
//to remove elements we have pop method,shift method,splice method,delete operator
p_names.pop(); //removes last element
for (let names of p_names) {
  console.log(names);
}
p_names.shift(); //removes first element
for (let names of p_names) {
  console.log(names);
}
p_names.splice(2, 1); //removes in middle
for (let names of p_names) {
  console.log(names);
}
//delete p_names [3];
//for (let names of p_names) {
// console.log(names);
//}
//removes value but not reference it shows as undefined
// to get portion of array we use slice method
console.log(p_names.slice(2, 4));
console.log(p_names.slice(-4, -2));
// to search elements we use indexOf(),includes(),lastindexof(),find()

console.log(p_names.indexOf("realme"));
// to sort we use sort() it sorts in ascending order
console.log(p_names.sort());
console.log(p_names.reverse()); //to sort in decending order
//advanced methods in array(ES6)
//reduse method it is call back method
let sum = prices.reduce((total, value) => {
  return total + value;
});
console.log(sum);
//map method
let offerPrice = prices.map((value) => {
  return value - 5000;
});
console.log(offerPrice);
//to concate
let p_names1 = ["moto", "poco"];
console.log(p_names.concat(p_names1));
//spread operator
let brands = [...p_names, ...p_names1];
