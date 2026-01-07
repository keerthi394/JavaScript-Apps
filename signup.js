//validation logic
function validate() {
  //request data gathering logic
  let user_name = document.getElementById("usrname").value;
  let password = document.getElementById("pass").value;
  let confirm_password = document.getElementById("cnfpass").value;
  let mobile_no = document.getElementById("mobile").value;
  let regex = /[a-z][A-Z]/; //regular expression;
  let mbregex = /[0-9]{10}/;
  //validation logic
  if (user_name == "") {
    alert("Please enter username.");
    return false;
  }
  if (password == "") {
    alert("please enter password.");
    return false;
  }
  if (password.length < 8 || password.length > 12) {
    alert("password should be minimum 8 characters and maximum 12 characters");
    return false;
  }
  if (!regex.test(password)) {
    alert(
      "password should be combination of alpha(small letters,capital letters)"
    );
    return false;
  }
  if (confirm_password != password) {
    alert("password not matched");
    return false;
  }
  if (mobile_no == "") {
    alert("please enter mobile number");
    return false;
  }
  // if(mobile_no.length <10){
  //     alert("mobile number should be 10 digits");
  //     return false;
  // }
  if (!mbregex.test(mobile_no)) {
    alert("Mobile number should contain only 10 digits");
    return false;
  }
  return true;
}
