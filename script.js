let computerScore = 0;
let humanScore = 0;
let computerChoice;
const rockButton = document.getElementById("rockButton");
const paperButton = document.getElementById("paperButton");
const scissorsButton = document.getElementById("scissorsButton");
const computerText = document.getElementById("computerText");
const gameText = document.getElementById("gameText");


function getComputerChoice() {
    let randomNumber = Math.random();
    if (randomNumber < 1 / 3) {
        return "stein";
    } else if (randomNumber > 1 / 3 && randomNumber < 2 / 3) {
        return "papier";
    } else {
        return "schere";
    }
}


rockButton.addEventListener("click", () => playRound("stein", getComputerChoice()));
paperButton.addEventListener("click", () => playRound("papier", getComputerChoice()));
scissorsButton.addEventListener("click", () => playRound("schere", getComputerChoice()));



function playRound(humanChoice, computerChoice) {
   
if (!(humanScore === 5 || computerScore === 5)) {
         let result;
    let strongerChoice;
    let weakerChoice;
    if (humanChoice === "stein" && computerChoice === "papier" ||
        humanChoice === "papier" && computerChoice === "schere" ||
        humanChoice === "schere" && computerChoice === "stein") {
        result = "hast verloren"
        computerScore += 1;
        strongerChoice = computerChoice;
        weakerChoice = humanChoice;
    } else if ((humanChoice === "stein" && computerChoice === "stein" ||
        humanChoice === "papier" && computerChoice === "papier" ||
        humanChoice === "schere" && computerChoice === "schere")) {
            result = "draw";
    } else if (humanChoice){
        result = "hast gewonnen";
        humanScore += 1;
        strongerChoice = humanChoice;
        weakerChoice = computerChoice;
    } 
    if (result && result !== "draw") {
        gameText.textContent = `Du ${result}! ${strongerChoice[0].toUpperCase() + strongerChoice.substring(1)} ist stärker als ${weakerChoice[0].toUpperCase() + weakerChoice.substring(1)}\nDer Spielstand ist ${humanScore} (Du) zu ${computerScore} (Computer)`;
    } else if (result) {
        gameText.textContent = `Unentschieden! Versuche es nochmal\nDer Spielstand ist ${humanScore} (Du) zu ${computerScore} (Computer)`;
    }
    computerText.textContent = computerChoice;
    }
    if (computerScore === 5) {
        gameText.textContent = "Du hast leider verloren... Vielleicht hast du nächstes Mal mehr Glück!";
    } else if (humanScore === 5) {
        gameText.textContent = "Gratulation, du hast gewonnen! Du bist nun der offizielle Weltmeister in Schere, Stein, Papier.";
    }
}
