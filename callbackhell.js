const studentdetails = () => {
  console.log("studentinfo");
  setTimeout(() => {
    let rollnos = [1, 2, 3, 4];
    console.log(rollnos);
    setTimeout(
      (rollnos) => {
        const data = {
          sname: "keerthi",
          qualification: "btech",
        };
        console.log(`name is ${data.sname}
                qualification is ${data.qualification}
                roll no ${rollnos}`);
      },
      2000,
      rollnos[1]
    );
  }, 2000);
};
studentdetails();
