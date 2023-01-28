// generate random letter...
function generateRandomLetter() {
  const letters = "abcdefghijklmnopqrstuvwxyz";
  return letters[Math.floor(Math.random() * letters.length)];
}

// declare variables with DOM
var computerLetter = generateRandomLetter();
var wins = parseInt(document.getElementById("win").innerHTML);
var losses = parseInt(document.getElementById("lost").innerHTML);
var guesses_left = parseInt(document.getElementById("guesses_left").innerHTML);
var guesses = document.getElementById("guesses_letters").innerText;
var letter = [];

// when user click keyboard
window.onkeyup = function (e) {
  // check if user do not repeat the same letter
  if (letter.length == 0) {
    letter.push(e.key);
    guesses += e.key + " ";
    document.getElementById("guesses_letters").innerHTML = guesses;
  } else {
    var flag = true;
    for (i of letter) {
      if (i == e.key) {
        flag = false;
        break;
      }
    }
    if (flag) {
      guesses += e.key + " ";
      document.getElementById("guesses_letters").innerHTML = guesses;
      letter.push(e.key);
    } else {
      alert("Repeated value please click another");
      guesses_left++;
    }
  }

  // check if user letter equal computer letter
  if (e.key == computerLetter) {
    wins++;
    document.getElementById("win").innerText = wins;
    guesses_left = 9;
    document.getElementById("guesses_left").innerText = guesses_left;
    alert("You won! Game is starting again)) " + " Letter is " + e.key);
    computerLetter = generateRandomLetter();
    document.getElementById("guesses_letters").innerText = " ";
    guesses = "";
    letter = [];
  } else {
    guesses_left--;
    document.getElementById("guesses_left").innerText = guesses_left;
    if (guesses_left <= 0) {
      alert("You lost! Game is starting again(( " + " Letter was --- " + computerLetter);
      computerLetter = generateRandomLetter();
      losses++;
      guesses_left = 9;
      document.getElementById("guesses_left").innerText = guesses_left;
      document.getElementById("lost").innerText = losses;
      document.getElementById("guesses_letters").innerText = " ";
      guesses = "";
      letter = [];
    }
  }
};
