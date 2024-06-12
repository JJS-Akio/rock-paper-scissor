const startgame = document.getElementById('startgame');
const gameButtons = document.getElementById('game-buttons');
const gameInfo = document.getElementById('game-info');
const resultElement = document.getElementById('result');
const scoreElement = document.getElementById('score');
const choiceElement = document.getElementById('choice')
const finalResultElement = document.getElementById('finalResult')

let humanScore = 0;
let computerScore = 0;
let roundsPlayed = 0;
let tie = 0;

startgame.addEventListener('click', () => {
    createDust(startgame, 100, () => {
        startgame.style.display = 'none';
        gameButtons.classList.remove('hidden');
        const buttons = gameButtons.querySelectorAll('.game-button');
        buttons.forEach(button => {
            createReformingDust(button, 100, () => {
                button.classList.add('show');
            });
        });
    });
});

gameButtons.addEventListener('click', (event) => {
    if (event.target.classList.contains('game-button')) {
        const userChoice = event.target.getAttribute('data-choice');
        const computerChoice = getComputerChoice();
        playRoundWithTimer(userChoice, computerChoice);
    }
});

async function playRoundWithTimer(userChoice, computerChoice) {
    gameButtons.classList.add('hidden');
    gameInfo.classList.remove('hidden');
    
    const result = playRound(userChoice, computerChoice);
    setTimeout(() => {
        resultElement.textContent = `${result}`;
    }, 1000);

    if (result === "Nice win, take is slow and breath, next round might not be as easy") {
        humanScore++;
    } else if (result === "You blind or what, do not lose the next round") {
        computerScore++;
    }
    else {
        tie++;
    }
    // Update the current score
    setTimeout(() => {
        scoreElement.textContent = `You: ${humanScore}, Computer: ${computerScore}`;
    }, 2000);

    if (humanScore === 5 || computerScore === 5) {
        setTimeout(() => {
            displayFinalResult();
        }, 3000);
    } else {
        setTimeout(() => {
            gameInfo.classList.add('hidden');
            gameButtons.classList.remove('hidden');
        }, 3000);
    }
    resultElement.textContent = '';
    scoreElement.textContent = '';
}

function displayFinalResult() {
    choiceElement.style.display = 'none';
    resultElement.style.display = 'none';
    scoreElement.style.display = 'none';

    let finalMessage = `Final score - You: ${humanScore}, Computer: ${computerScore}, Tie: ${tie}\n`;
    if (humanScore > computerScore) {
        finalMessage += "Close one, robots won't rule yet!";
    } else if (humanScore < computerScore) {
        finalMessage += "Computer wins, well AI will probably take over.";
    } else {
        finalMessage += "Probably should not happen but if it did we are in a matrix";
    }

    setTimeout(() => {
        finalResultElement.style.display = 'block';
        finalResultElement.textContent = `\n${finalMessage}`;
        setTimeout (() => {
            finalResultElement.style.display = 'none';
        }, 3000)
    }, 3000);
}

function getRandomArbitrary() {
    return Math.floor(Math.random() * 3);
}

function getComputerChoice() {
    const arr = ["rock", "paper", "scissors"];
    return arr[getRandomArbitrary()];
}

function playRound(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return "TIE";
    } else if (
        (userChoice === "paper" && computerChoice === "rock") ||
        (userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "scissors" && computerChoice === "paper")
    ) {
        return "Nice win, take is slow and breath, next round might not be as easy";
    } else {
        return "You blind or what, do not lose the next round";
    }
}

function createDust(element, particleCount, callback) {
    const rect = element.getBoundingClientRect();
    element.style.transition = 'opacity 2s';
    element.style.opacity = '0';

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'dust-particle';
        particle.style.top = `${rect.top + (Math.random() * rect.height)}px`;
        particle.style.left = `${rect.left + (Math.random() * rect.width)}px`;
        particle.style.setProperty('--dust-x', `${Math.random() * 200 - 100}px`);
        particle.style.setProperty('--dust-y', `${Math.random() * 200 - 100}px`);
        document.body.appendChild(particle);

        setTimeout(() => {
            particle.remove();
        }, 2000);
    }

    if (callback) {
        setTimeout(callback, 2000);
    }
}

function createReformingDust(element, particleCount, callback) {
    const rect = element.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'dust-particle';
        particle.style.top = `${Math.random() * window.innerHeight}px`;
        particle.style.left = `${Math.random() * window.innerWidth}px`;
        const particleX = parseFloat(particle.style.left);
        const particleY = parseFloat(particle.style.top);
        particle.style.setProperty('--dust-x', `${centerX - particleX}px`);
        particle.style.setProperty('--dust-y', `${centerY - particleY}px`);
        particle.style.animation = 'reform 2s forwards';
        document.body.appendChild(particle);

        setTimeout(() => {
            particle.remove();
        }, 2000);
    }

    if (callback) {
        setTimeout(callback, 2000);
    }
}
