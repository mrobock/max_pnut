// create an array of random insults/answers
//
// link text box to function to create an answers
//
// cause button to show an answer, and clear the question box
//


var answers = ["Have you tried looking in the mirror?", "Because you're ugly.", "Because your face.", "Because your mother doesn't love you.", "Because Pierce says so, idiot"];

function eightBall(){
  document.getElementById("response").innerHTML = answers[Math.floor(Math.random()* answers.length)];
  document.getElementById("inputField").value = ""
}
