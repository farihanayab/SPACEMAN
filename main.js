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
var categories = {
  foods: ["apple", "pizza", "cake"],
  countries: ["mexico", "china", "canada"],
  animals: ["kangaroo", "elephant", "shark"],
};
const wordsArr = ["APPLE", "PIZZA", "CAKE"];
let currentWord = wordsArr[Math.floor((Math.random() * (wordsArr.length)))];
console.log(currentWord);
let guessedLetter;
let tries = 9;
// Letters a person has guessed
let guessedLetters = [];
// Maximum attempts allowed
let remainingAttempts = 6;
// current word
const aEl = document.getElementById("A");
const bEl = document.getElementById("B");
const wordEl = document.getElementById("word");
const messageEl = document.getElementById("message");

let underscores = [];
let currentWordArr = [...currentWord];
console.log(currentWordArr);
currentWordArr.forEach((element) => {
  underscores.push("_");
  wordEl.innerText = underscores.join(" ");
});

// show the player the categoriess
displayCategories();


// ----------------------------------clicks--------------------------------------------------------

aEl.addEventListener("click", function (event) {
  guessedLetter = event.target.id;
  tries--;
  if (tries <= 0) {
    messageEl.innerText = "gameover";
  } else {
    if (currentWord.includes(guessedLetter) && !underscores.includes("_")) {
      messageEl.innerText = "You Win";
      let index = currentWord.indexOf(event.target.id);
      underscores[index] = event.target.id;
      wordEl.innerText = underscores.join(" ");
    } else if (currentWord.includes(guessedLetter)) {
      let index = currentWord.indexOf(event.target.id);
      underscores[index] = event.target.id;
      wordEl.innerText = underscores.join(" ");
    } else {
      messageEl.innerText = "This letter is not in the word";
    }
  }
});
bEl.addEventListener("click", function (event) {
  guessedLetter = event.target.id;
  tries--;
  if (tries <= 0) {
    messageEl.innerText = "gameover";
  } else {
    if (currentWord.includes(guessedLetter) && !underscores.includes("_")) {
      messageEl.innerText = "You Win";
      let index = currentWord.indexOf(event.target.id);
      underscores[index] = event.target.id;
      wordEl.innerText = underscores.join(" ");
    } else if (currentWord.includes(guessedLetter)) {
      let index = currentWord.indexOf(event.target.id);
      underscores[index] = event.target.id;
      wordEl.innerText = underscores.join(" ");
    } else {
      messageEl.innerText = "This letter is not in the word";
    }
  }
});


// Step1: Allow the player to pick a category
// Function to display available categories
function displayCategories() {
  console.log("Available categories:");
  for (let category in categories) {
    console.log(category);
  }
  // WRITE CODE that grabs the category via DOM from the users selection *******
  // pass this category to handleUserSelction(category)*****
  function handleUserSelection(categories) {}
}

// Step2 Pick a random word from categories depending on the user selection
function handleUserSelection(category) {
  // Randomly select a word from the chosen category
  let randomIndex = Math.floor(Math.random() * category.length);
  let selectedWord = category[randomIndex];
  console.log("Selected word:", selectedWord);
  // Start the Hangman game with the selected word
  startSpaceman(selectedWord);
}

// Step3 Start the spaceman game using the word the computer chose for the player
function startSpaceman(word) {
  currentWord = word;
  console.log("We are now in startSpaceman function");
  // WRITE ******
  // START THE GAME BY ADDING THE BLANK LETTERS TO THE PAGE SO USER CAN TRY GUESSING THE WORD
  // function or something that counts how many letters are in the word, and for each letter is adds a blank line onto the page
  // design this so that when a user guesses a letter correctly, that letter appears on the screen
  // create a dive for each letter and give it a unique id with that letter id='guess-id'
  // when a player guesses correctly, that div can go from "dispaly:none" to "display:block" and the letter will appear on screen
  // note: look up how to add letters to a div
  // <div class='hide-letter' id='guess-A'>"A"</div>

  // ALLOW USER TO GUESS LETTERS
  // let the user click a ABC letter ******
  // WRITE get the value of selected letter -> save it to a variable -> pass this var to handlePlayerGuess(var)*****
  // make sure the letter could be grabbed via DOM let letter = '', using handleClick
  let letter = "";
  function handlePlayerGuess(letter) {}
}
// --------------------------messages------------------------------------------------------
// Step4 Check if the players guess is correct or incorrect
// if it is correct - add the letter to the line
// if it wrong - take away a point from remaining guesses and add a body part for spaceman
function handlePlayerGuess(letter) {
  // Check if the letter has already been guessed
  console.log("We are now in handlePlayerGuess");
  if (guessedLetters.includes(letter)) {
    // display a message to the user telling them that they already guessed this letter. ******
    console.log("You already guessed that letter. Try again.");
    return;
  }

  // Add the letter to the guessed letters array
  // create a box in html to store your guesses *****
  // add this letter to that box ***
  // OR after a player guesses a letter, disable or make that letter disapear ex:
  // document.getElementById("A").style.display="none";
  // document.getElementById("mainFrameTwo").style.display="block";
  guessedLetters.push(letter);
  // Check if the letter is present in the word
  if (word.includes(letter)) {
    console.log("Correct guess!");
    // You can perform any additional actions or logic here
    // add the correct guess to the line (where the word is)***
  } else {
    remainingAttempts--;
    console.log("Incorrect guess! Remaining attempts: " + remainingAttempts);
    // You can perform any additional actions or logic here
    // LOGIC TO MAKE SPACEMAN BODY PARTS APPEAR ONE BY ONE
  }

  // Check if the game is over
  if (remainingAttempts === 0) {
    console.log("Game over! You ran out of attempts.");
    return;
    // You can perform any additional actions or logic here
  } else {
    // ask the player for another guess
    startSpaceMan(currentWord);
  }
}
// Function to start the Hangman game

//
// Play Game

// reference
subMenuEL.addEventListener("click", function (guesses) {});




