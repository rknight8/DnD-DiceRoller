"use strict";

const textInput = document.getElementById("text-input");

// Rolling function
function rollDice(count, max) {
    let currentRoll = 0;
    let totalRoll = 0;
    max = Math.floor(max);
    if(max == 0) {
        console.log("Dice cannot have 0 sides...")
    }
    else {
        for(let i = 0; i < count; i++) {
            currentRoll = Math.floor(Math.random() * max + 1);
            totalRoll = totalRoll + currentRoll;
            console.log("Rolled " + currentRoll);
        }
        console.log("Total: " + totalRoll);
    }
  }

// Keyboard event
const enterEvent = (e) => {
    if (e.keyCode === 13) {
        const rollData = textInput.value.split("d");
        if (rollData.length === 2 ) {
            rollDice(rollData[0], rollData[1]);
        }
        else {
            console.log("Please specify only one dice. Such as 2d6, or 1d20");
        }
    }
}
textInput.addEventListener("keypress", enterEvent);

