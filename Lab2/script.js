let correctNumber = Math.floor(Math.random() *99) + 1;

let guessInput = document.querySelector(".guessInput");
let guessButton = document.querySelector(".guessButton");
let outputMessage = document.querySelector(".output");
let pastGuesses = document.querySelector(".pastGuesses");
let resetButton = document.querySelector(".resetButton");
let scoreboard = document.querySelector(".scoreBoard");

let numberGuesses = 0;
let wins = 0;
let losses = 0;

resetButton.style.display = "none";

guessButton.addEventListener("click", function () {
    numberGuesses+=1
    let guess = +guessInput.value;

    if (guess > 99) {
        outputMessage.style.color = "orange";
        outputMessage.textContent = "Please enter a number below 99";
    }

    else if (guess === correctNumber) {
        pastGuesses.textContent += guess + " ";
        outputMessage.style.color = "green"
        outputMessage.textContent = "Correct! You guessed the number in " + numberGuesses + " tries";
        wins = wins + 1;
        updateScore();
        guessInput.disabled = true;
        guessButton.disabled = true;
        resetButton.style.display = "block";

//attempts
        } else if (guess < correctNumber) {
        pastGuesses.textContent += guess + " ";
        outputMessage.style.color = "blue";
        outputMessage.textContent = "Too low! Number of guesses left: " + (7 - numberGuesses);
    }else if (guess > correctNumber){
        pastGuesses.textContent += guess + " ";
        outputMessage.style.color = "red"
        outputMessage.textContent = "Too high, Number of guesses left: " + (7 - numberGuesses);
    }   
         if (numberGuesses >= 7 && guess !== correctNumber){
            outputMessage.style.color = "red";
            outputMessage.textContent = "Game over! The correct number was: " + correctNumber;
            losses = losses + 1;
            updateScore();
            guessInput.disabled = true;
            guessButton.disabled = true;
            resetButton.style.display = "block";
            
        }

});
resetButton.addEventListener("click", function () {
correctNumber = Math.floor(Math.random() * 99) + 1;
numberGuesses = 0;
pastGuesses.textContent = "";
outputMessage.textContent = "New game started!";
guessInput.disabled = false;
guessButton.disabled = false;
guessInput.value = "";
resetButton.style.display = "none";
});

function updateScore() {
    scoreboard.style.color = "pink";
    scoreboard.textContent = "Wins: " + wins + " | Losses: " + losses;

    
}


// function turnGreen(){
//     guessInput.style.backgroundColor = "lightgreen";
// }
