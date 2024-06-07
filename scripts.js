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

function playGame() {
  let humanScore = 0;
  let computerScore = 0;
  const resultPrint = document.querySelector(".resultPrint");

  function playRound(event) {
    const compChoice = getComputerChoice();
    const humChoice = event.target.dataset.choice;
    if (humChoice === "rock") {
      if (compChoice === "paper") {
        resultPrint.textContent = "You lose! Paper beats Rock";
        computerScore++;
      } else {
        resultPrint.textContent = "You win! Rock beats Scissors";
        humanScore++;
      }
    } else if (humChoice === "paper") {
      if (compChoice === "scissors") {
        resultPrint.textContent = "You lose! Scissors beats Paper";
        computerScore++;
      } else {
        resultPrint.textContent = "You win! Paper beats Rock";
        humanScore++;
      }
    } else if (humChoice === "scissors") {
      if (compChoice === "rock") {
        resultPrint.textContent = "You lose! Rock beats Scissors";
        computerScore++;
      } else {
        resultPrint.textContent = "You win! Scissors beats Paper";
        humanScore++;
      }
    } else {
      resultPrint.textContent = "TIE!";
    }
  }

  document.querySelectorAll(".choiceBtn").forEach((button) => {
    button.addEventListener("click", (e) => {
      playRound(e);

      if (humanScore === 5) {
        resultPrint.textContent = `HUMAN WIN THE GAME! Score: ${humanScore}:${computerScore}`;
        computerScore = 0;
        humanScore = 0;
      } else if (computerScore === 5) {
        resultPrint.textContent = `COMPUTER WIN THE GAME! Score: ${humanScore}:${computerScore}`;
        computerScore = 0;
        humanScore = 0;
      }
    });
  });
}

playGame();
