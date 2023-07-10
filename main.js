// ------------------------ variables ----------------------------------- //

// words we are using
const wordsArr = [
  "ADORABLE",
  "ADORED",
  "ADVANCED",
  "AFRAID",
  "AGED",
  "AGGRAVATING",
  "AGGRESSIVE",
  "AGILE",
  "AGITATED",
  "AGONIZING",
  "AGREEABLE",
  "AJAR",
  "ALARMED",
  "ALARMING",
  "ALERT",
  "ALIENATED",
  "ALIVE",
  "ALL",
  "APPREHENSIVE",
  "APPROPRIATE",
  "APT",
  "ARCTIC",
  "ARID",
  "AROMATIC",
  "ARTISTIC",
  "ASHAMED",
  "ASSURED",
  "ASTONISHING",
  "ATHLETIC",
  "ATTACHED",
  "ATTENTIVE",
  "ATTRACTIVE",
  "AUSTERE",
  "AUTHENTIC",
  "AUTHORIZED",
  "AUTOMATIC",
  "AVARICIOUS",
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
};


// display the current word as dashes on the screen
function wordToDash(wordArr) {
  wordArr.forEach((element) => {
      underscores.push("_");
      wordEl.innerText = underscores.join(" ");
  });
}

// start the game with init function
function init() {
  playButton.innerHTML = 'Reset'
  console.log('calling init function now')
  messageEl.innerText = 'Use the alphabet in the textbox below to guess a letter'
  underscores = [];
  currentWord = wordsArr[Math.floor((Math.random() * (wordsArr.length)))];
  currentWordArr = [...currentWord];
  console.log(currentWordArr)
  let guessedLetters = [];
  remainingLives = 6;
  wordToDash(currentWordArr);
  let showWord = document.getElementById('word').classList.remove('hidden');
}

function resetGame() {
  messageEl.innerText = 'Use the alphabet in the textbox below to guess a letter';
  init()
}

// when a player clicks player the game should start

playButton.addEventListener('click', init);

// ---------------------------------Allow the User to Click Letters and Handle These Clicks---------------------------------------------------------

function endGame() {
  // disable all the characters
  allLetters = document.querySelectorAll('letter');
  console.log(allLetters);
  console.log('Game is Over!')
  // ask the player if they want to play again?
  // reset evrything
}

function letterClicked(event) {

  guessedLetter = event.target.id;
  if (guessedLetters.includes(guessedLetter)) {
      console.log('You already guessed this letter!')
      messageEl.innerText = 'You already guessed this letter!'
  } else {
      guessedLetters.push(guessedLetter)
      // disable the letter 
      // document.getElementById(`${guessedLetter}`).classList.add('disable');
  }
  
  if (remainingLives <= 0) {
      messageEl.innerText = "gameover";
      document.getElementById(`${bodyPart}`).classList.remove('hidden');
      // let allRemainingLetters = document.getElementsByClassName('letter');
      let remainingLetters = document.querySelectorAll('.letter')
      playButton.innerHTML = 'Play Again'
      for (l in remainingLetters) {
          console.log(l)
      }
  } else {
      if (currentWord.includes(guessedLetter)) {
          var condition = true;
          for (;condition;) {
              if (!currentWordArr.includes(guessedLetter)) {
                  condition = false;
              } else {
                  let index = currentWordArr.indexOf(event.target.id);
                  currentWordArr.splice(index, 1, '_');
                  console.log(currentWordArr);
                  underscores[index] = event.target.id;
                  wordEl.innerText = underscores.join(" ");
                  console.log('underscores: ' + underscores)
                   if (!underscores.includes("_")) {
                      console.log("You win!");
                      // check if everything has been guessed right
                      messageEl.innerText = "You win!";
                      endGame();
              }
          } 
      }
      } else {
              messageEl.innerHTML = "This letter is not in the word";
              remainingLives--;
              // show a body part;
              console.log('remainingLives' + remainingLives)
              bodyPart = remainingLives;
              // remove the hidden class from the body part so it shows up
              document.getElementById(`${bodyPart}`).classList.remove('hidden')
       
}}} 


  // add an event listener to every letter so I can handle player clicks



// function resetButtons() {
//     let disabledLetters = document.querySelectorAll('disable');
//     for (i = 0; i < disabledLetters.length; i++) {
//         console.log(disabledLetters[i])
//         disabledLetters[i].classList.remove('disable')       
//     }
// }