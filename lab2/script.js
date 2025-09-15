//let correctNumber = Math.floor(Math.random() * 99) + 1;
let correctNumber = 10


let guessInput = document.querySelector("#guessInput");
let guessButton = document.querySelector("#guessButton");
let outputMessage = document.querySelector(".output");
let pastGuesses = document.querySelector(".pastGuesses");




//function turnGreen(){
  // guessInput.style.backgroundColor = "lightgreen";

//}

//turnGreen();
//Don't need this anymore

guessButton.addEventListener('click', function () {
    

    if (+guessInput.value == correctNumber){
        pastGuesses.textContent += guessInput.value + " "
        outputMessage.style.color = "green";
        outputMessage.textContent = "Correct"
    }else if (+guessInput.value < correctNumber) {
        pastGuesses.textContent += guessInput.value + " "
        outputMessage.style.color = "blue";
        outputMessage.textContent = "Number was too low"
    }
     else if (+guessInput.value < correctNumber) {
        pastGuesses.textContent += guessInput.value + " "
        outputMessage.style.color = "red";
        outputMessage.textContent = "Number was too high"
    }
else {
    outputMessage.style.color = "orange";
    outputMessage.textContent = "ERROR: Input not recognized"
}
});

    






// }

//     if (guessInput.value >0) {
//         guessInput.style.backgroundColor = "lightgreen";
//     }
//     document.querySelector("#guessMessage").textContent =
//     `You guessed ${guessInput.value }`;
//     //"You guessed " + guessInput.value;
// });