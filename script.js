let computerScore = 0;
let humanScore = 0;

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

function getHumanChoice() {
    let userInput = prompt("Wähle zwischen Schere, Stein und Papier");
    if (userInput.toLowerCase() === "stein") {
        return "stein";
    } else if (userInput.toLowerCase() === "papier") {
        return "papier";
    } else if (userInput.toLowerCase() === "schere") {
        return "schere";
    }
}

function playRound(humanChoice, computerChoice) {
    humanChoice = getHumanChoice();
    computerChoice = getComputerChoice();
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
    } else {
        console.log("Du hast etwas falsches eingetippt")
    }
    if (result && result !== "draw") {
        console.log(`Du ${result}! ${strongerChoice[0].toUpperCase() + strongerChoice.substring(1)} ist stärker als ${weakerChoice[0].toUpperCase() + weakerChoice.substring(1)}\nDer Spielstand ist ${humanScore} (Du) zu ${computerScore} (Computer)`);
    } else if (result) {
        console.log(`Unentschieden! Versuche es nochmal\nDer Spielstand ist ${humanScore} (Du) zu ${computerScore} (Computer)`);
    }
}

function playGame() {
    console.log("Willkommen bei der Schere, Stein, Papier Weltmeisterschaft! Wer zuerst 5 Punkte hat gewinnt.")
    while (!(humanScore === 5 || computerScore === 5)) {
        playRound();
    }
    if (computerScore === 5) {
        console.log("Du hast leider verloren... Vielleicht hast du nächstes Mal mehr Glück!")
    } else {
        console.log("Gratulation, du hast gewonnen! Du bist nun der offizielle Weltmeister in Schere, Stein, Papier.")
    }
}

console.log(" ");
console.log(" ");
console.log(" ");
console.log(" ");
console.log(" ");
console.log(" ");
console.log(" ");

playGame();