function getComputerChoice() {
    let randNum = Math.random();
    if (randNum < 0.33) {
        return "rock";
    } else if (randNum >= 0.33 && randNum < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice() {
    let userPrint;
    while (true) {
        userPrint = prompt("Choice rock, paper or scissors: ");

        if (userPrint === null) return undefined;

        userPrint = userPrint.toLowerCase();
        if (
            userPrint === "rock" ||
            userPrint === "paper" ||
            userPrint === "scissors"
        ) {
            return userPrint;
        } else {
            alert("Incorrect value, please try again!");
        }
    }
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humChoice, compChoice) {
        if (humChoice === "rock") {
            if (compChoice === "paper") {
                console.log("You lose! Paper beats Rock");
                computerScore++;
            } else {
                console.log("You win! Rock beats Scissors");
                humanScore++;
            }
        } else if (humChoice === "paper") {
            if (compChoice === "scissors") {
                console.log("You lose! Scissors beats Paper");
                computerScore++;
            } else {
                console.log("You win! Paper beats Rock");
                humanScore++;
            }
        } else if (humChoice === "scissors") {
            if (compChoice === "rock") {
                console.log("You lose! Rock beats Scissors");
                computerScore++;
            } else {
                console.log("You win! Scissors beats Paper");
                humanScore++;
            }
        } else if (humChoice === compChoice) {
            console.log("TIE!");
        } else {
            console.log("You lose!");
            computerScore++;
        }
    }

    for (let i = 0; i < 5; i++) {
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    }

    if (humanScore > computerScore) {
        console.log(
            `The winner is HUMAN. Score ${humanScore}:${computerScore}`
        );
    } else {
        console.log(
            `The winner is COMPUTER. Score ${computerScore}:${humanScore}`
        );
    }

    console.log("Reload page for new game");
}

playGame();
