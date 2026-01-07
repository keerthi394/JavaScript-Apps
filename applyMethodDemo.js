//APPLY METHOD
//in Apply method we use array to pass the values

const sinfo = {
  sdetails: function (qual, pnumber) {
    return this.sid + " " + this.sname + " " + " " + qual + " " + pnumber;
  },
};
const stu = {
  sid: 1000,
  sname: "keerthi",
};
console.log(sinfo.sdetails.apply(stu, ["btech", 2346545646]));
