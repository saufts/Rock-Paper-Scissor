console.log("Hello World!");

let playerScore = 0;
let computerScore = 0;
let roundCount = 0;

const messageWin = `You won Round ${roundCount + 1}`;
const messageLose = `You lost Round ${roundCount + 1}`;
const messageTie = `Tie in Round ${roundCount + 1}`;

const startButton = document.querySelector('.startButton');
const mainContainer = document.querySelector(".mainContainer");
const results = document.querySelector('.results');

const playerPointsPar = document.querySelector('.playerPointsPar');
const computerPointsPar = document.querySelector('.computerPointsPar');

const choiceButtons = document.querySelector('.choiceButtons');

let computerPoints = 0;
let playerPoints = 0;

//playerPointsPar.textContent = '';
//computerPointsPar.textContent = '';

startButton.addEventListener('click', function() {
    startGame();
});

let playerChoice = '';


function startGame() {

    startButton.parentNode.removeChild(startButton);
    let roundResult = 0;
    
    rockButton = document.createElement('button');
    rockButton.textContent = 'ROCK';
    paperButton = document.createElement('button');
    paperButton.textContent = 'PAPER';
    scissorsButton = document.createElement('button');
    scissorsButton.textContent = 'SCISSORS';

    round = document.createElement('div');
    round.textContent = `Round: ${roundCount}`;

    choiceButtons.appendChild(rockButton);
    choiceButtons.appendChild(paperButton);
    choiceButtons.appendChild(scissorsButton);
    results.appendChild(round);

    computerPointsPar.textContent = `Computer: 0`;
    playerPointsPar.textContent = `Player: 0`;

    rockButton.addEventListener('click', function() {
        playerChoice = 'rock';
        playRound('rock', getComputerChoice());
        round.textContent = `Round: ${roundCount}`;
    });
    paperButton.addEventListener('click', function() {
        playerChoice = 'paper';
        playRound('paper', getComputerChoice())
        round.textContent = `Round: ${roundCount}`;
    });
    scissorsButton.addEventListener('click', function() {
        playerChoice = 'scissors';
        playRound('scissors', getComputerChoice())
        round.textContent = `Round: ${roundCount}`;
    });
}

function getComputerChoice() {
    let computerChoice = (Math.floor(Math.random() * 100) % 3) + 1;

    switch(computerChoice) {
        case 1:
            alert(`vs Rock!`);
            return 'rock';
            break;
        case 2:
            alert(`vs Paper!`);
            return 'paper';
            break;
        case 3:
            alert(`vs Scissors!`);
            return 'scissors';
            break;
    }
} 

function playRound(playerSelection, computerSelection) {

    //const playerChoice = playerSelection.toLowerCase();
    
    roundCount++; 
    if(roundCount === 5) printResults();

    if (playerChoice === computerSelection) {
        playerPoints += 0;
        return 3;
    }

    switch (playerChoice) {

        case 'rock':
            if (computerSelection === 'paper') {
                computerPoints += 1;
                computerPointsPar.textContent = `Computer: ${computerPoints}`;
                return 1;
            }
            else if (computerSelection === 'scissors') {
                playerPoints += 1;
                playerPointsPar.textContent = `Player: ${playerPoints}`;
                return 2;
            }
            break;
        case 'paper':
            if (computerSelection === 'rock') {
                playerPoints += 1;
                playerPointsPar.textContent = `Player: ${playerPoints}`;
                return 2;
            }
            else if(computerSelection === 'scissors') {
                computerPoints += 1;
                computerPointsPar.textContent = `Computer: ${computerPoints}`;
                return 1;
            }
            break;
        case 'scissors':
            if (computerSelection === 'rock') {
                computerPoints += 1;
                computerPointsPar.textContent = `Computer: ${computerPoints}`;
                return 1;
            }
            else if (computerSelection === 'paper') {
                playerPoints += 1;
                playerPointsPar.textContent = `Player: ${playerPoints}`;
                return 2;
            }
            break;
    }  
}


function printResults() {
    console.log("Final Result: ");
    if (playerScore > computerScore) {
        console.log("Player Wins!");
        alert(`You won with score ${playerScore} / ${computerScore} points`);
    }

    else if (playerScore < computerScore) {
        console.log("Computer Wins!");
        alert(`You lost with score ${playerScore} / ${computerScore} points`);
    }

    else console.log("It's a Tie!")
}