let computerScore = 0;
let humanScore = 0;

function getComputerChoice() {
    let randomNumber = Math.random();
    if (randomNumber < 1 / 3) {
        return "rock";
    } else if (randomNumber > 1 / 3 && randomNumber < 2 / 3) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice() {
    let userInput = prompt("Choose between rock, paper or scissors! \n\nPlease type in your answer in all lower case.");
    if (userInput.toLowerCase() === "rock") {
        return "rock";
    } else if (userInput.toLowerCase() === "paper") {
        return "paper";
    } else if (userInput.toLowerCase() === "scissors") {
        return "scissors";
    }
}