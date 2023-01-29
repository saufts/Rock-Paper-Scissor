console.log("Hello World!");

let playerScore = 0;
let computerScore = 0;
let roundCount = 0;

let startButton = document.querySelector('.startButton');
const mainContainer = document.querySelector(".mainContainer");
const results = document.querySelector('.results');

const playerPointsPar = document.querySelector('.playerPointsPar');
const computerPointsPar = document.querySelector('.computerPointsPar');

const choiceButtons = document.querySelector('.choiceButtons');

let playerChoicePar = document.querySelector('.playerChoicePar');
let computerChoicePar = document.querySelector('.computerChoicePar');

let computerPoints = 0;
let playerPoints = 0;

startButton.addEventListener('click', function() {
    startGame();
});

let playerChoice = '';
let computerChoice = '';


function startGame() {

    setStartGameLayout();

    rockButton.addEventListener('click', function() {
        playerChoice = 'rock';
        playerChoicePar.textContent = `Player: ${playerChoice}`;
        playRound('rock', getComputerChoice());
        computerChoicePar.textContent = `Computer: ${computerChoice}`;
        round.textContent = `Round: ${roundCount}`;
    });

    paperButton.addEventListener('click', function() {
        playerChoice = 'paper';
        playerChoicePar.textContent = `Player: ${playerChoice}`;
        playRound('paper', getComputerChoice())
        computerChoicePar.textContent = `Computer: ${computerChoice}`;
        round.textContent = `Round: ${roundCount}`;
    });

    scissorsButton.addEventListener('click', function() {
        playerChoice = 'scissors';
        playerChoicePar.textContent = `Player: ${playerChoice}`;
        playRound('scissors', getComputerChoice());
        computerChoicePar.textContent = `Computer: ${computerChoice}`;
        round.textContent = `Round: ${roundCount}`;
    });
}

function setStartGameLayout() {

    startButton.parentNode.removeChild(startButton);
    
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

    computerChoicePar.textContent = `Computer: `;
    playerChoicePar.textContent = `Player: `;

}

function getComputerChoice() {

    let computerSelection = (Math.floor(Math.random() * 100) % 3) + 1;

    switch(computerSelection) {
        case 1:
            computerChoice = 'rock';
            return 'rock';
            break;
        case 2:
            computerChoice = 'paper';
            return 'paper';
            break;
        case 3:
            computerChoice = 'scissors';
            return 'scissors';
            break;
    }
} 

function playRound(playerSelection, computerSelection) {
    
       
    if(roundCount < 5) {
        roundCount++; 
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
    } else setGameOver();
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

function setGameOver() {

    if(playerPoints > computerPoints) alert('You won!');
    else if (playerPoints < computerPoints) alert('You lose!');
    else alert('It\'s a tie!');

    roundCount = 0;
    round.textContent = `Round: ${roundCount}`;

    playerPoints = 0;
    computerPoints = 0;

    computerChoice = '';
    playerChoice = '';

    computerPointsPar.textContent = `Computer: ${computerPoints}`;
    playerPointsPar.textContent = `Player: ${playerPoints}`;

    computerChoicePar.textContent = `Computer: ${computerChoice}`;
    playerChoicePar.textContent = `Player: ${playerChoice}`;
}