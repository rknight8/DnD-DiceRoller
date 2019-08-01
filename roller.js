"use strict";

const textInput = document.getElementById("user-input");
const outputBox = document.getElementById("output-box");

// Rolling function
function rollDice(count, max) {
    let currentRoll = 0;
    let totalRoll = 0;
    max = parseInt(Math.floor(max));
    count = parseInt(count);
    if(max == 0) {
        console.log("Dice cannot have 0 sides...")
    }
    else {
        for(let i = 0; i < count; i++) {
            currentRoll = Math.floor(Math.random() * max + 1);
            totalRoll = totalRoll + currentRoll;
            console.log("Rolled d" + max + " → " + currentRoll);
        }
        outputBox.innerHTML = "\nTotal: " + totalRoll + outputBox.innerHTML;
        return totalRoll;
    }
  }

// Get data and pass to roll function
const getRoll = () => {
    const rollData = textInput.value;
    console.log(rollData);
    let regexDice = /(\d+)d(\d+)/gi;
    let rollString = rollData.replace(regexDice, "rollDice($1,$2)");
    console.log(eval(rollString));
}


// Keyboard event
const enterEvent = (e) => {
    if (e.keyCode === 13) {
        getRoll();
    }
}
// Listen for the enter key on text input
textInput.addEventListener("keypress", enterEvent);

