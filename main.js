// Game Logic
//console.log("js works")
// Spaceman

// letters (abc)
// categories : {kay:value, key:value} let categores = { 'foods' = ['apple'], 'cars': ['toyota']}
// step1. show the person the categories (how can I list all the keys in an object)
// step2. let the person pick a category ('foods') (. key value)
// step3. randomly select a word from the values array (math.random, array.length, select that index and store it as your word)
// hangman - point system (6)

// GLOBAL VARIABLES
// Categories and words
// var categories = {
//   foods: ["apple", "pizza", "cake"],
//   countries: ["mexico", "china", "canada"],
//   animals: ["kangaroo", "elephant", "shark"],
// };
// ------------------------ variables ----------------------------------- // 

// words we are using
const wordsArr = ["APPLE", "PIZZA", "CAKE"];
// current word the user is guessing 
let currentWord;
let underscores;
// guessed letters by user
let guessedLetters;
// Maximum attempts allowed
let remainingAttempts;


// ------------------------- DOM Elements I Need ---------------------------- // 

const playButton = document.getElementById('play')
const resetButton = document.getElementById('reset')
const wordEl = document.getElementById("word");
const messageEl = document.getElementById("message");
var letterEl = document.getElementsByClassName("letter");



// ----------------------------Functions to Start the Game ------------------------- // 

// display the current word as dashes on the screen
function wordToDash(wordArr) {
     wordArr.forEach((element) => {
        underscores.push("_");
        wordEl.innerText = underscores.join(" "); 
    });  
}

// start the game with init function
function init() {
    console.log('calling init function now')
    underscores = [];
    currentWord = wordsArr[Math.floor((Math.random() * (wordsArr.length)))];
    let currentWordArr = [...currentWord];
    console.log(currentWordArr)
    let guessedLetters = [];
    remainingLives = 6;
    wordToDash(currentWordArr);
}

 // playButton.addEventListener("click",init);

// START THE GAME
init()

// ------------------------------------------------------------------------------------------

// Allow the User to Click Letters and Handle These Clicks

const myLetters = document.getElementsByClassName("letter");

function letterClicked(e) {
  console.log(e.target.id);  // Get ID of Clicked Element
    // disable the letter 
    // check if this letter exists inside the currentWordArr 
    // if it exists --> it means they guessed right
        // add this to the dash at the correct spot
    // else they guessed wrong 
        // minus a life
        // add a body part of space man to the page
}

for (let letter of myLetters) {
  letter.addEventListener("click", letterClicked);
}


// document.getElementById("A").addEventListener("click", handleClick);
// function handleClick(event) {
//     // get the id of the letter so we know which letter is clicked
//     console.log(event.target.innerHTML);
    
// }

// aEl.addEventListener("click", function(event) {
//   guessedLetter = event.target.id;
//   tries--;
//   if (tries <= 0) {
//     messageEl.innerText = "gameover";
//   } else {
//     if (currentWord.includes(guessedLetter) && !underscores.includes("_")) {
//       messageEl.innerText = "You Win";
//       let index = currentWord.indexOf(event.target.id);
//       underscores[index] = event.target.id;
//       wordEl.innerText = underscores.join(" ");
//     } else if (currentWord.includes(guessedLetter)) {
//       let index = currentWord.indexOf(event.target.id);
//       underscores[index] = event.target.id;
//       wordEl.innerText = underscores.join(" ");
//     } else {
//       messageEl.innerText = "This letter is not in the word";
//     }
//   }
// });
// bEl.addEventListener("click", function(event) {
//   guessedLetter = event.target.id;
//   tries--;
//   if (tries <= 0) {
//     messageEl.innerText = "gameover";
//   } else {
//     if (currentWord.includes(guessedLetter) && !underscores.includes("_")) {
//       messageEl.innerText = "You Win";
//       let index = currentWord.indexOf(event.target.id);
//       underscores[index] = event.target.id;
//       wordEl.innerText = underscores.join(" ");
//     } else if (currentWord.includes(guessedLetter)) {
//       let index = currentWord.indexOf(event.target.id);
//       underscores[index] = event.target.id;
//       wordEl.innerText = underscores.join(" ");
//     } else {
//       messageEl.innerText = "This letter is not in the word";
//     }
//   }
// });

// // --------------------------messages------------------------------------------------------

// function handlePlayerGuess(letter) {
//   // Check if the letter has already been guessed
//   console.log("We are now in handlePlayerGuess");
//   if (guessedLetters.includes(letter)) {
//     // display a message to the user telling them that they already guessed this letter. ******
//     console.log("You already guessed that letter. Try again.");
//     return;
//   }
// }

//     subMenuEL.addEventListener("click", function(guesses) { });
