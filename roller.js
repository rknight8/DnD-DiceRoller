"use strict";

const textInput = document.getElementById("text-input");


function rollDice(count, max) {
    let currentRoll = 0;
    let totalRoll = 0;
    max = Math.floor(max);

    for(let i = 0; i < count; i++) {
        currentRoll = Math.floor(Math.random() * max + 1);
        totalRoll = totalRoll + currentRoll;
        console.log("Rolled " + currentRoll);
    }

    return totalRoll;
  }