//events logic
function sample() {
  alert("Hi");
}
let btnvalue = document.getElementById("demo");
btnvalue.addEventListener("click", sample);
function sample1() {
  alert("hello");
}
let btnvalue1 = document.getElementById("demo1");
btnvalue1.addEventListener("click", sample1);
let headervalue = document.getElementById("header");
const mousehover = () => {
  headervalue.style.color = "blue";
};
let mouseout = () => {
  headervalue.style.color = "";
};
headervalue.addEventListener("mousehover", mousehover);
headervalue.addEventListener("mouseout", mouseout);

let inputvalue = document.getElementById("ip");
let pvalue = document.getElementById("p1");
const inputlogic = () => {
  let uservalue = inputvalue.value;
  pvalue.textContent = uservalue;
};
inputvalue.addEventListener("input", inputlogic);
