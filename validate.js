//validation logic
function validate() {
  //request data gathering logic
  let username = document.getElementById("user").value;
  let password = document.getElementById("pass").value;
  let regex = /[a-z][A-Z]/;
  //validation logic
  if (username == "") {
    alert("please enter username");
    return false;
  }
  if (password == "") {
    alert("please enter password");
    return false;
  }
  if (password.length < 8 || password.length > 12) {
    alert("minimum 8 chars and max of 12 needed");
    return false;
  }
  if (regex.test(password)) {
    alert("pass should be combination of small letters,capital letters");
    return false;
  }
  return true;
}
