function getRandomArbitrary() {
    return Math.floor(Math.random() * 3);
}

function getComputerChoice() {
    arr = ["rock", "paper", "scissors"]
    return arr[getRandomArbitrary()]
}

function getUserPrompt (){
    let userinput = prompt("enter a value of rock, paper, or scissors");
    while (userinput !== "rock" && userinput !== "paper" && userinput !== "scissors") {
        userinput = prompt("Please enter a valid choice of rock, paper, or scissors:");
    }
    return(userinput);
}

function  playRound(userChoice, computerChoice){
    console.log(`Your choice: ${userChoice}, Computer's choice: ${computerChoice}`);
    if(userChoice === computerChoice){
        return "TIE";
    } else if ( userChoice === "paper" && computerChoice === "rock" || userChoice === "rock" && computerChoice === "scissors" || userChoice === "scissors" && computerChoice === "paper"){
        return "Take is slow and breath, next might not be as easy";
    } else{
        return "You blind or what, do not lose the next round";
    }
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    for(let i = 0; i < 5; i++) {
        const humanSelection = getUserPrompt();
        const computerSelection = getComputerChoice();
        const result = playRound(humanSelection, computerSelection);
        alert(result);
        if (result === "Take is slow and breath, next might not be as easy") {
            humanScore++;
        } else if (result === "You blind or what, do not lose the next round") {
            computerScore++;
        }
    }

    alert(`Final score - You: ${humanScore}, Computer: ${computerScore}`);
    if (humanScore > computerScore) {
        alert("Close one, robots won't rule yet!");
    } else if (humanScore < computerScore) {
        alert("Computer wins, well AI will probably take over.");
    } else {
        alert("Probably should not happen but if it did we are in a matrix");
    }
}

playGame();
console.log(playGame)