//Pictures of all the possible choices. Bell, cherries, lemons, stars, 7's
let symbols = [
    "img/Cherry.png",
    "img/Watermelon.png",
    "img/bell.png",
    "img/seven.jpg",
    "img/lemon.png"

];

let spinButton = document.getElementById("spin");
let slot1 = document.getElementById("slot1");
let slot2 = document.getElementById("slot2");
let slot3 = document.getElementById("slot3");
let result = document.getElementById("result");
let betInput = document.getElementById("bet");

//Event Listener #1
spinButton.addEventListener("click", spinSlots);


function getRandomSymbols(){
    let pool = Math.floor(Math.random() * symbols.length);
    let symbol = symbols[pool];
    return symbol;
}

function spinSlots() {
    let bet = (betInput.value);


let s1 = getRandomSymbols();
let s2 = getRandomSymbols();
let s3 = getRandomSymbols();


// Display the randoms symbols / Result instead of src= "blank.png"
slot1.setAttribute("src", s1);
slot2.setAttribute("src", s2);
slot3.setAttribute("src", s3);

// Winnings
if (s1 === s2 && s2 === s3){
    // JACKPOT
let winnings = bet * 10;
result.textContent = "JACKPOT1 You've won " + winnings + " points!";
result.style.color = "green";
}else if (s1 === s2 || s2 === s3 || s1 === s3) {
    let winnings = bet * 2;
    result.textContent = "Nice! You got a match! You've won " + winnings + " points!";
    result.style.color = "blue";
}else{
    result.textContent = "No matches. You lost " + bet + " points";
    result.style.color = "red";
    }
}


// BETS also EventListener 2
betInput.addEventListener("input", updateBet);

//Bet message
function updateBet(){
    let bet = (betInput.value)
    // Searched this up on W3. NotANumber or less than 0.
    if(isNaN(bet) || bet <= 0){
        result.textContent = "Enter a bet above 0";
        result.style.color = "white";
    } else {
    result.textContent = "You are betting " + bet + " credits";
    result.style.color = "white";

}
}




