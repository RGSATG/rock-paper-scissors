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

function playRound(humanChoice, computerChoice) {
    humanChoice = getHumanChoice();
    computerChoice = getComputerChoice();
    let result;
    let strongerChoice;
    let weakerChoice;
    if (humanChoice === "rock" && computerChoice === "paper" ||
        humanChoice === "paper" && computerChoice === "scissors" ||
        humanChoice === "scissors" && computerChoice === "rock") {
        result = "lose"
        computerScore += 1;
        strongerChoice = computerChoice;
        weakerChoice = humanChoice;
    } else if ((humanChoice === "rock" && computerChoice === "rock" ||
        humanChoice === "paper" && computerChoice === "paper" ||
        humanChoice === "scissors" && computerChoice === "scissors")) {
            result = "draw";
    } else if (humanChoice){
        result = "win";
        humanScore += 1;
        strongerChoice = humanChoice;
        weakerChoice = computerChoice;
    } else {
        console.log("Wrong input, try again please")
    }
    if (result && result !== "draw") {
        console.log(`You ${result}! ${strongerChoice[0].toUpperCase() + strongerChoice.substring(1)} beats ${weakerChoice[0].toUpperCase() + weakerChoice.substring(1)}\nThe current score is ${humanScore} (You) to ${computerScore} (Computer)`);
    } else if (result) {
        console.log(`It's a draw, try again!\nThe current score is ${humanScore} (You) to ${computerScore} (Computer)`);
    }
}

function playGame() {
    console.log("This is a rock, paper, scissors tournament. The first player to reach a score of 5 is the winner!")
    while (!(humanScore === 5 || computerScore === 5)) {
        playRound();
    }
    if (computerScore === 5) {
        console.log("Unfortunately you lost, maybe you will have more luck next time")
    } else {
        console.log("Congratulations, you won! You are the champion of rock, paper scissors!")
    }
}

playGame();