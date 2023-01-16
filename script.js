console.log("Hello World!");


function getComputerChoice() {
    let computerChoice = (Math.floor(Math.random() * 100) % 3) + 1;

    switch(computerChoice) {
        case 1:
            return 'rock';
            break;
        case 2:
            return 'paper';
            break;
        case 3:
            return 'scissors';
            break;
    }
} 

function playRound(playerSelection, computerSelection) {


    console.log(playerSelection);
    console.log(computerSelection);
 

    if (playerSelection === computerSelection) return 2;

    switch (playerSelection) {

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
}

function game() {
    
    let playerScore = 0;
    let computerScore = 0;

    for(let i = 0; i < 5; i++) {

        let playerSelectionPrompt = prompt("What is your choice?");
        let roundResult = playRound(playerSelectionPrompt, getComputerChoice());
        const messageWin = `You won Round ${i}`;
        const messageLose = `You lost Round ${i}`;
        const messageTie = `Tie in Round ${i}`;

        console.log(`Round ${i}:`);

        if (roundResult === 0) {
            computerScore += 1;
            console.log("Computer W");
            alert(messageLose);

        } else if (roundResult === 1) {
            playerScore += 1;
            console.log("Player W");
            alert(messageWin);

        } else if (roundResult === 2) {
            playerScore += 0;
            console.log("Tie");
            alert(messageTie);
        }
    }

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

