window.onload = function() { // VERY IMPORTANT. Makes sure all HTML us loaded before Javascript runs
    loadStates(); // loads/fetches the list of all the US states when page opens

    document.querySelector("#zipBtn").addEventListener("click", checkZip);
    document.querySelector("#stateSelect").addEventListener("change", loadCounties);
    document.querySelector("#username").addEventListener("keyup", checkUsername); //Keyup updates and checks in real-time with every key press
    document.querySelector("#password1").addEventListener("click", suggestPassword); // Suggests password when CLICKED
    document.querySelector("#password1").addEventListener("keyup", validatePasswords);
    document.querySelector("#password2").addEventListener("keyup", validatePasswords);

}

// GETS ALL STATES
async function loadStates() {
    let response = await fetch("https://csumb.space/api/allStatesAPI.php"); //returns the list of all US states
    let data = await response.json(); // coverts HTTP response into a json data. (array of objects)
    let stateSelect = document.querySelector("#stateSelect"); //The dropdown menu of states from html file

    for (let s of data) { //loops through every state in the API
        let opt = document.createElement("option");
        opt.value = s.usps; // Sets values like CA for California
        opt.textContent = s.state; //Full name of the state
        stateSelect.appendChild(opt); //add to the dropdown menu
    }
}

// GET COUNTIES BASED ON STATES
async function loadCounties() {
    let state = document.querySelector("#stateSelect").value;
    let response = await fetch(`https://csumb.space/api/countyListAPI.php?state=${state}`);
    let data = await response.json();
    let countySelect = document.querySelector("#countySelect");

    countySelect.innerHTML = ""; // clear old list of counties from previously picked state
    
    for (let c of data) { // c short for county
        let opt = document.createElement("option");
        opt.textContent = c.county; //displays the name of counties
        countySelect.appendChild(opt);
    }
}

// CHECK THE ZIP CODE
async function checkZip() {
    // Reads whatever Zip Code is typed into the box
    let zip = document.querySelector("#zip").value;
    let response = await fetch(`https://csumb.space/api/cityInfoAPI.php?zip=${zip}`);
    let data = await response.json();

    let city = document.querySelector("#city");
    let lat = document.querySelector("#lat");
    let long = document.querySelector("#long");
    let msg = document.querySelector("#zipMessage");

    if (data.length == 0) {
        msg.textContent = "Zip code not found!";
        city.textContent = "";
        lat.textContent = "";
        long.textContent = "";
    } else {
        msg.textContent = "";
        city.textContent = data.city;
        lat.textContent = data.latitude;
        long.textContent = data.longitude;
    }
}

// USERNAME CHECK
async function checkUsername() {
    let username = document.querySelector("#username").value;
    if (username.length < 3) {
        document.querySelector("#userMsg").textContent = "Username too short";
        document.querySelector("#userMsg").style.color = "red";
        return;
    }

    let response = await fetch(`https://csumb.space/api/usernamesAPI.php?username=${username}`);
    let data = await response.json();

    let msg = document.querySelector("#userMsg");
    if (data.available) {
        msg.textContent = "available";
        msg.style.color = "green";
    } else {
        msg.textContent = "taken";
        msg.style.color = "red";
    }
}

// suggest a random password in alert window
async function suggestPassword() {
    let response = await fetch(`https://csumb.space/api/suggestedPassword.php?length=8`);
    let data = await response.json();
    alert("Suggested Password: " + data.password);

}

function validatePasswords(){
let password1 = document.querySelector("#password1").value;
let password2 = document.querySelector("#password2").value;
let passMsg = document.querySelector("#passMsg");

// Nothing typed yet
    if (password1.length === 0 && password2.length === 0) {
        passMsg.textContent = "";
        return;
    }

//checks password length
if (password1.length < 6){
    passMsg.textContent = "Password must be at least 6 characters";
    passMsg.style.color = "red";
    return;
}

//check password match
if (password1 === password2){
    passMsg.textContent = "Passwords match and are valid";
    passMsg.style.color = "green";

} else {
    passMsg.textContent = "Passwords do not match or are not valid";
    passMsg.style.color = "red";
}

}
