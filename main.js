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
/// ------------------------ variables ----------------------------------- // 

// words we are using
const wordsArr = [
  'ABANDONED',    'ABLE',        'ABSOLUTE',   'ADORABLE',
  'ADVENTUROUS',  'ACADEMIC',    'ACCEPTABLE', 'ACCLAIMED',
  'ACCOMPLISHED', 'ACCURATE',    'ACHING',     'ACIDIC',
  'ACROBATIC',    'ACTIVE',      'ACTUAL',     'ADEPT',
  'ADMIRABLE',    'ADMIRED',     'ADOLESCENT', 'ADORABLE',
  'ADORED',       'ADVANCED',    'AFRAID',     'AFFECTIONATE',
  'AGED',         'AGGRAVATING', 'AGGRESSIVE', 'AGILE',
  'AGITATED',     'AGONIZING',   'AGREEABLE',  'AJAR',
  'ALARMED',      'ALARMING',    'ALERT',      'ALIENATED',
  'ALIVE',        'ALL',         'ALTRUISTIC', 'AMAZING',
  'AMBITIOUS',    'AMPLE',       'AMUSED',     'AMUSING',
  'ANCHORED',     'ANCIENT',     'ANGELIC',    'ANGRY',
  'ANGUISHED',    'ANIMATED',    'ANNUAL',     'ANOTHER',
  'ANTIQUE',      'ANXIOUS',     'ANY',        'APPREHENSIVE',
  'APPROPRIATE',  'APT',         'ARCTIC',     'ARID',
  'AROMATIC',     'ARTISTIC',    'ASHAMED',    'ASSURED',
  'ASTONISHING',  'ATHLETIC',    'ATTACHED',   'ATTENTIVE',
  'ATTRACTIVE',   'AUSTERE',     'AUTHENTIC',  'AUTHORIZED',
  'AUTOMATIC',    'AVARICIOUS',  'AVERAGE',    'AWARE',
  'AWESOME',      'AWFUL',       'AWKWARD',    'BABYISH',
  'BAD',          'BACK',        'BAGGY',      'BARE',
  'BARREN',       'BASIC',       'BEAUTIFUL',  'BELATED',
  'BELOVED',      'BENEFICIAL',  'BETTER',     'BEST',
  'BEWITCHED',    'BIG',         'BIGHEARTED', 'BIODEGRADABLE',
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

const playButton = document.getElementById('play')
const resetButton = document.getElementById('reset')
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

playButton.addEventListener('click', init);
// resetButton.addEventListener('click', resetGame)

// ------------------------------------------------------------------------------------------

// Allow the User to Click Letters and Handle These Clicks

const myLetters = document.getElementsByClassName("letter");

function letterClicked(event) {
  console.log(event.target.id);  // Get ID of Clicked Element
    let letterID = event.target.id
    // disable the letter 
    document.getElementById(`${letterID}`).disabled = true;
    // check if this letter exists inside the currentWordArr 
    // if it exists --> it means they guessed right
    // add this letter to the dashes
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
