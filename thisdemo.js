//this keyword
const empInfo = {
  firstName: "Keerthi",
  lastName: "Reddy",
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};
console.log(empInfo.fullName());
