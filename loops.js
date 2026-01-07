//loops in js
//for loop
for (i = 1; i <= 10; i++) {
  console.log(i);
}
//while loop
let j = 0;
while (j != 10) {
  j++;
  console.log(j);
}
let k = 1;
do {
  console.log(k);
  k++;
} while (k <= 10);
//New loops in ES6:"for in","for of".this are used to retrive data from iterables(bulk data ex:string,arrays,..etc)
let pnames = ["realme", "redmi", "vivo", "sumsung"];
for (let names of pnames) {
  console.log(names);
}

for (let names in pnames) {
  console.log(pnames[names]);
}
//objects
let empinfo = {
  eid: 1001,
  ename: "keerthi",
  esalary: 90000,
};
for (let info in empinfo) {
  console.log(empinfo[info]);
}
//how to retrive from string
let clgname = "vlits";
for (let name of clgname) {
  console.log(name);
}
