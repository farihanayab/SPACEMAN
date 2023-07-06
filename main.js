console.log("js works")

// Game Logic

// Spaceman 

// letters (abc) 
// categories : {kay:value, key:value} let categores = { 'foods' = ['apple'], 'cars': ['toyota']}
// step1. show the person the categories (how can I list all the keys in an object)
// step2. let the person pick a category ('foods') (. key value)
// step3. randomly select a word from the values array (math.random, array.length, select that index and store it as your word)
// hangman - point system (6)

// Categories and words
var categories = {
    foods: ['apple', 'pizza', 'cake'],
    countries: ['mexico', 'china', 'canada'],
    TVshows: []

  };
  
  // Function to display available categories
  function displayCategories() {
    console.log("Available categories:");
    for (var category in categories) {
      console.log(category);
    }
  }
  
  // Function to handle category selection
  function handleCategorySelection(category) {
    var words = categories[category];
    if (!words) {
      console.log("Invalid category. Please choose a valid category.");
      return;
    }
  
    // Randomly select a word from the chosen category
    var randomIndex = Math.floor(Math.random() * words.length);
    var selectedWord = words[randomIndex];
    console.log("Selected word:", selectedWord);
  
    // Start the Hangman game with the selected word
    startSpaceman(selectedWord);
  }
  
  // Function to start the Hangman game
  function startSpaceman(word) {
    var remainingAttempts = 6; // Maximum attempts allowed
  
    // Function to handle player's guess
    function handlePlayerGuess(letter) {
      // Check if the letter has already been guessed
      if (guessedLetters.includes(letter)) {
        console.log("You already guessed that letter. Try again.");
        return;
      }
  
      // Add the letter to the guessed letters array
      guessedLetters.push(letter);
  
      // Check if the letter is present in the word
      if (word.includes(letter)) {
        console.log("Correct guess!");
        // You can perform any additional actions or logic here
      } else {
        remainingAttempts--;
        console.log("Incorrect guess! Remaining attempts: " + remainingAttempts);
        // You can perform any additional actions or logic here
      }
  
      // Check if the game is over
      if (remainingAttempts === 0) {
        console.log("Game over! You ran out of attempts.");
        // You can perform any additional actions or logic here
      }
    }






// have a var that counts how many incorrect guesses
// Initialize the incorrectGuesses variable
var incorrectGuesses = 0;

// Function to handle an incorrect guess
function handleIncorrectGuess() {
  incorrectGuesses++; // Increment the count of incorrect guesses
  console.log("Incorrect guess! Total incorrect guesses: " + incorrectGuesses);
  // You can perform any additional actions or logic here
}


// have an array that stores the guess of the player: 
// Initialize the array to store player's guesses
var playerGuesses = [];

// Function to handle a player's guess
function handlePlayerGuess(guess) {
  playerGuesses.push(guess); // Add the guess to the array
  console.log("Player's guesses: " + playerGuesses);
  // You can perform any additional actions or logic here
}

// have a var that stores the current word
    // word = 'computer

// function that checks if the guess is inside of the word 
    // if input is 'A' then let it show up on the line and if it is inncorrect then let a incorrect message show up. 
    // instead of showing up on the line 
    // if answered incorrectly one body part will appear.

// if the player guess correctly they win (put in winning number)
// else they lose

  
let guessedWord = '_ _ _ _ _'
let guesseWord = '_ P P _ _ '// (object or array) 