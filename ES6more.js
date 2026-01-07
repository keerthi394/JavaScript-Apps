// to define multi line strings  we use back tick
let dese = `Vignan's Lara Institute of Technology & Science (VLITS) is a private engineering college in Vadlamudi, Guntur, Andhra Pradesh, established in 2007, known for its quality technical education, strong CSE focus, modern labs, and focus on industry-ready skills, affiliated with JNTUK and approved by AICTE, offering B.Tech & M.Tech programs in various engineering fields. It's part of the Vignan Group, 
  aiming to provide international-standard education in a green campus environment.ada (JNTUK)`;
console.log(dese);
//string interpolation
let firstname = "keerthi";
let lastname = "Reddy";
console.log(`${firstname} ${lastname}`);
//array destructuring
let pnames = ["realme", "LG", "vivo"];
let [brand1, brand2, brand3] = pnames;
console.log(brand1);
console.log(brand2);
console.log(brand3);
//object destructing
const movieinfo = {
  moviename: "bahubali",
  director: "rajmouli",
  producer: "shobu",
};
let { moviename, director, producer } = movieinfo;
console.log(moviename);
console.log(director);
console.log(producer);
