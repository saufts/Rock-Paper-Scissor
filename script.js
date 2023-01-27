console.log("Hello World!");

let playerScore = 0;
let computerScore = 0;
let roundCount = 0;


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

    const playerChoice = playerSelection.toLowerCase();
    
 
    if (playerChoice === computerSelection) return 2;

    switch (playerChoice) {

        case 'rock':
            if (computerSelection === 'paper') return 0;
            else if (computerSelection === 'scissors') return 1;
            break;
        case 'paper':
            if (computerSelection === 'rock') return 1;
            else if(computerSelection === 'scissors') return 0;
            break;
        case 'scissors':
            if (computerSelection === 'rock') return 0;
            else if (computerSelection === 'paper') return 1;
            break;
    }   
    
    if (playerChoice !== 'rock' || playerChoice !== 'paper' || playerChoice !== 'scissors') {
        alert(`Choose between rock, paper and scissors!`);
        console.log("Something went wrong...");
        return 3;
    } 

    console.log(`Player -> ${playerChoice}`);
    console.log(`Computer -> ${computerSelection}`);
}

/*
function game() {

    while(roundCount < 5) {

        const messageWin = `You won Round ${roundCount + 1}`;
        const messageLose = `You lost Round ${roundCount + 1}`;
        const messageTie = `Tie in Round ${roundCount + 1}`;

        let playerSelectionPrompt = prompt("What is your choice?");
        let roundResult = playRound(playerSelectionPrompt, getComputerChoice());
        

        if(roundResult != 3) {

            console.log(`Round ${roundCount+1}:`);

            if (roundResult === 0) {
                computerScore += 1;
                console.log("Computer W");
                alert(messageLose);

                roundCount++;
    
            } else if (roundResult === 1) {
                playerScore += 1;
                console.log("Player W");
                alert(messageWin);

                roundCount++;
    
            } else if (roundResult === 2) {
                console.log("Tie");
                alert(messageTie);

                roundCount++
            }
        }
    }
        
    printResults();
}
*/

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




function game() {

    
 startButton.parentNode.removeChild startButton);

    while(roundCount < 5) {

        const messageWin = `You won Round ${roundCount + 1}`;
        const messageLose = `You lost Round ${roundCount + 1}`;
        const messageTie = `Tie in Round ${roundCount + 1}`;

        let playerSelectionPrompt = prompt("What is your choice?");
        let roundResult = playRound(playerSelectionPrompt, getComputerChoice());
        

        if(roundResult != 3) {

            console.log(`Round ${roundCount+1}:`);

            if (roundResult === 0) {
                computerScore += 1;
                console.log("Computer W");
                alert(messageLose);

                roundCount++;
    
            } else if (roundResult === 1) {
                playerScore += 1;
                console.log("Player W");
                alert(messageWin);

                roundCount++;
    
            } else if (roundResult === 2) {
                console.log("Tie");
                alert(messageTie);

                roundCount++
            }
        }
    }
        
    printResults();
}

const startButton = document.querySelector(' startButton');
const mainContainer = document.querySelector(".mainContainer");

if startButton) startButton.addEventListener('click', game);





