// Event Listeners
document.querySelector("#guessBtn").addEventListener("click", checkGuess);
document.querySelector("#resetBtn").addEventListener("click", initializeGame);

// Global variables
let randomNumber;
let attempts = 0;
let wins = 0;
let losses = 0;

// Initialize Game
function initializeGame() {
  randomNumber = Math.floor(Math.random() * 99) + 1;
  console.log("Random number: " + randomNumber);
  attempts = 0;

  // Reset UI
  document.querySelector("#resetBtn").style.display = "none";
  //Shows the Guess button
  document.querySelector("#guessBtn").style.display = "inline";

  let playerGuess = document.querySelector("#playerGuess");
  playerGuess.value = ""; //CLEARS THE TEXT BOX
  playerGuess.focus();

  let feedback = document.querySelector("#feedback");
  feedback.textContent = ""; //CLEARS THE FEEDBACK FROM LAST GUESS

  document.querySelector("#guesses").textContent = "";
}

// Check Guess
function checkGuess() {
  let feedback = document.querySelector("#feedback");
  feedback.textContent = "";

  let playerGuess = document.querySelector("#playerGuess");
  let guess = Number(playerGuess.value);

  // Invalid input
  if (guess < 1 || guess > 99 || isNaN(guess)) {
    feedback.textContent = "Enter a number between 1 and 99";
    feedback.style.color = "red";
    return;
  }

  attempts++;
  document.querySelector("#guesses").textContent += guess + " ";
  feedback.style.color = "orange";

  if (guess === randomNumber) {
    feedback.textContent = "You guessed it! You Won!";
    feedback.style.color = "green";
    wins++;
    updateScore();
    gameOver();
  } else if (attempts === 7) {
    feedback.textContent = "Sorry, you lost! The number was " + randomNumber;
    feedback.style.color = "red";
    losses++;
    updateScore();
    gameOver();
  } else if (guess > randomNumber) {
    feedback.textContent = "Guess was high";
    feedback.style.color = "red";
  } else {
    feedback.textContent = "Guess was low";
    feedback.style.color = "blue";
  }
}

// End Game
function gameOver() {
  let guessBtn = document.querySelector("#guessBtn");
  let resetBtn = document.querySelector("#resetBtn");
  let playerGuess = document.querySelector("#playerGuess");

  guessBtn.style.display = "none";
  resetBtn.style.display = "inline";
  playerGuess.disabled = true;
}

// Update scoreboard
function updateScore() {
  document.querySelector("#scoreBoard").textContent =
    "Wins: " + wins + " | Losses: " + losses;
}

// Start the first game automatically
initializeGame();
