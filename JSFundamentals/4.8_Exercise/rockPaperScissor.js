/*
    TODO: Rock/Paper/Scissor
        using your knowledge so far, build a game of Rock/Paper/Scissor where through the use of the prompt 
        function, a user can enter their choice and based on a random selection - they can either tie/win 
        or lose against a computer.

    Variables
      const gameAI
          Is an object created for a AI to randomly select a object value
    Functions:
      getAIChoice()
          Function that selects an random value from the object gameAI. Returns a value as an string.
      rockPaperScissor(stringParam)
          Function that takes in one argument which is the user input. From this the function uses
          logic to determine wether the user or AI wins. At the end returns true if winner is found or
          returns false if the game is tie and repeat the game!
*/
const gameAI = {
  1: "Rock",
  2: "Paper",
  3: "Scissor",
};

function getAIChoice() {
  let getAIChoice = Object.values(gameAI);
  return getAIChoice[Math.floor(Math.random() * getAIChoice.length)];
}
function rockPaperScissor(userInput) {
  //Get AIChoice object
  let AIChoice = getAIChoice();
  if (AIChoice.length === userInput.length) {
    console.log(`TIED GAME!
    AI chose: ${AIChoice} || User chose: ${userInput}`);
    return false;
  } else if (AIChoice.length > userInput.length) {
    console.log(`AI WINS!
    AI chose: ${AIChoice} || User chose: ${userInput}`);
    return (result = true);
  } else if (AIChoice.length < userInput.length) {
    console.log(`USER WINS!
    AI chose: ${AIChoice} || User chose: ${userInput}`);
    return (result = true);
  } else {
    throw "Error occurred restart game!";
  }
}

//=========MAIN GAME=============
let result = false;
const welcomeMessage = `
==================================
  Welcome to Rock/Paper/Scissor
==================================
`;
const goodByeMessage = `
==================================
          GAME OVER
==================================
`;
console.log(welcomeMessage);
while (result !== true) {
  const prompt = require("prompt-sync")({ sigint: true });
  let getChoice = prompt("Rock, Paper, Scissor? ");
  getChoice = getChoice.charAt(0).toUpperCase() + getChoice.slice(1);
  if (
    getChoice.indexOf(" ") >= 0 ||
    getChoice.length === 0 ||
    getChoice.length > 7
  ) {
    console.log("INVALID User input!");
    console.log("\n");
    continue;
  } else if (
    getChoice === "Rock" ||
    getChoice === "Paper" ||
    getChoice === "Scissor"
  ) {
    rockPaperScissor(getChoice);
    console.log("\n");
    continue;
  }
  console.log("INVALID User input!");
  console.log("\n");
  //Keep running game until winner is achieved
}
console.log(goodByeMessage);
