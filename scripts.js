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

function outcomeGame (){
    let userChoice = getUserPrompt();
    let computerChoice = getComputerChoice();
    console.log(`Your choice: ${userChoice}, Computer's choice: ${computerChoice}`);
    if(userChoice === computerChoice){
        return "TIE";
    } else if ( userChoice === "paper" && computerChoice === "rock" || userChoice === "rock" && computerChoice === "scissors" || userChoice === "scissors" && computerChoice === "paper"){
        return "You win";
    } else{
        return "You lose";
    }
}
console.log(outcomeGame())