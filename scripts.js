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

    if (userPrint === null) break;

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

function main() {
  console.log(getHumanChoice());
}

main();
