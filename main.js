// ------------------------ variables ----------------------------------- //

// words we are using
const wordsArr = [
  "ADORABLE",
  "AFRAID",
  "AGED",
  "AGGRESSIVE",
  "AGILE",
  "AGREEABLE",
  "AJAR",
  "ALARMED",
  "ALERT",
  "ALIVE",
  "AVERAGE",
  "AWARE",
  "AWESOME",
  "AWFUL",
];
// current word the user is guessing
let currentWord;
let currentWordArr;
let underscores;
// guessed letters by user
let guessedLetters = [];
// Maximum attempts allowed
let remainingAttempts;
let bodyPart;

// ------------------------- DOM Elements I Need ---------------------------- //

const playButton = document.getElementById("play");
const resetButton = document.getElementById("reset");
const wordEl = document.getElementById("word");
const messageEl = document.getElementById("message");
const letterEl = document.getElementsByClassName("letter");
const myLetters = document.getElementsByClassName("letter");

// ----------------------------Functions to Start the Game ------------------------- //

for (let letter of myLetters) {
  letter.addEventListener("click", letterClicked);
}

// display the current word as dashes on the screen
function wordToDash(wordArr) {
  wordArr.forEach((element) => {
    underscores.push("_");
    wordEl.innerText = underscores.join(" ");
  });
}

// start the game with init function
function init() {
  playButton.innerHTML = "Reset";
  messageEl.innerText =
    "Use the alphabet in the textbox below to guess a letter";
  underscores = [];
  currentWord = wordsArr[Math.floor(Math.random() * wordsArr.length)];
  currentWordArr = [...currentWord];
  let guessedLetters = [];
  remainingLives = 6;
  document.getElementById(
    "guess-remaining"
  ).innerHTML = `Guesses Remaining = ${remainingLives}`;
  wordToDash(currentWordArr);
  let showWord = document.getElementById("word").classList.remove("hidden");
  let showGuesses = document
    .getElementById("guess-remaining")
    .classList.remove("hidden");
}

function resetGame() {
  messageEl.innerText =
    "Use the alphabet in the textbox below to guess a letter";
  init();
}

// when a player clicks player the game should start

playButton.addEventListener("click", init);

// ---------------------------------Allow the User to Click Letters and Handle These Clicks---------------------------------------------------------

function letterClicked(event) {
  guessedLetter = event.target.id;
  if (guessedLetters.includes(guessedLetter)) {
    messageEl.innerText = "You already guessed this letter!";
  } else {
    guessedLetters.push(guessedLetter);
  }

  if (remainingLives <= 0) {
    messageEl.innerText = "You lose, Gameover";
    playButton.innerHTML = "Play Again";
  } else {
    if (currentWord.includes(guessedLetter)) {
      var condition = true;
      for (; condition; ) {
        if (!currentWordArr.includes(guessedLetter)) {
          condition = false;
        } else {
          let index = currentWordArr.indexOf(event.target.id);
          currentWordArr.splice(index, 1, "_");

          underscores[index] = event.target.id;
          wordEl.innerText = underscores.join(" ");

          if (!underscores.includes("_")) {
            // check if everything has been guessed right
            messageEl.innerText = "You win!";
          }
        }
      }
    } else {
      messageEl.innerHTML = "This letter is not in the word";
      remainingLives--;
      // show a body part;

      bodyPart = remainingLives;
      // Change the remaining lives number on the screen
      document.getElementById(
        "guess-remaining"
      ).innerHTML = `Guesses Remaining = ${remainingLives}`;
    }
  }
}
