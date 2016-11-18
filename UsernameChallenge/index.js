// retrieve username and password from html text box inputs
// button runs function to check credentials
// button causes paragraph under boxes to return valid/invalid and why
//
// These are the criteria:
// User ID and password cannot be the same
// User ID and password have to be at least six characters long
// User ID cannot contain the following characters: !#$
// Password has to contain at least one of: !#$
// Password cannot be "password"
// Password has to contain at least one digit
// Password has to contain a lower and an uppercase letter



function checkCreds() {
  function credzMaker() {
    return {
      user: document.getElementById("userField").value,
      pass: document.getElementById("passField").value,
    }
  }

  var credz = credzMaker();

  var answer = [];
  if (credz.user.length < 6) {
    answer.push("Your username is too short... loser");
  }

  if (credz.user.includes("&") || credz.user.includes("#") || credz.user.includes("$")) {
    answer.push("Your username can not contain a special character, dippy");
  }

  if (credz.pass.length < 6) {
    answer.push("Your password is too short... Max");
  }

  if (!credz.pass.includes("&") && !credz.pass.includes("#") && !credz.pass.includes("$")) {
    answer.push("Your password must contain a special character... dillweed");
  }

  if (answer.length == 0) {
    document.getElementById("response").innerHTML = "Fine, you win";
  }
  else {
    document.getElementById("response").innerHTML = answer.join("<br>");
  }


}
