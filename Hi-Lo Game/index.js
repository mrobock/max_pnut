//
// javascript - button functionality
// text box functionality
// paragraph functionality
// random number generator
// comparison statements for higher or lower with multiple responses (linked to paragraph)
var guess;
var answer = Math.floor(Math.random() * 100);
var i = 0;
var name = prompt("Please enter your name");;

function startGame() {
  if (i < 7) {
  guess = parseInt(document.getElementById("guess").value);
  //document.getElementById("response").innerHTML = guess;
    if (isNaN(parseInt(guess))) {
      document.getElementById("response").innerHTML = "Please enter a number asshole";
    }
    else if (guess < answer) {
      document.getElementById("response").innerHTML = "Too low idiot";
    }
    else if (guess > answer) {
      document.getElementById("response").innerHTML = "Too high assmunch";
    }
    else if (guess === answer) {
      document.getElementById("response").innerHTML = "HUZZAH " + name;
    }
    i++
  }
  else {
    document.getElementById("response").innerHTML = "You are an idiot " + name + ". Stop guessing already";
  }
}
