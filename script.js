let playerScore = 0;
let computerScore = 0;
try {
    game();    
} catch (error) {
    alert('will if you changed your mind reload tha page')
}


function game() {
    while (true) {
        const computerSelection = getComputerChoice();
        const playerSelection = playerChoice();
        playRound(playerSelection, computerSelection);
       if(playerScore === 5 || computerScore === 5){
        break
       }
    }
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        alert('it\'s a tie try again')
        console.log(`you ${playerScore} computer ${computerScore}`) 
    }
    if (playerSelection === 'rock' && computerSelection === 'scissors') {
        playerScore = playerScore + 1;
        alert('you win') 
        console.log(`you ${playerScore} computer ${computerScore}`) 
    }
    if (playerSelection === 'paper' && computerSelection === 'rock') {
        playerScore = playerScore + 1;
        alert('you win')
        console.log(`you ${playerScore} computer ${computerScore}`) 
    }
    if (playerSelection === 'scissors' && computerSelection === 'paper') {
       playerScore = playerScore + 1;++ playerScore;
        alert('you win')
        console.log(`you ${playerScore} computer ${computerScore}`) 
    }
    if (computerSelection === 'rock' && playerSelection === 'scissors') {
        computerScore = computerScore + 1;
        alert('you lose')
        console.log(`you ${playerScore} computer ${computerScore}`) 
    }
    if (computerSelection === 'paper' && playerSelection === 'rock') {
        computerScore = computerScore + 1;
        alert('you lose')
        console.log(`you ${playerScore} computer ${computerScore}`) 
    }
    if (computerSelection === 'scissors' && playerSelection === 'paper') {
        computerScore = computerScore + 1;
        alert('you lose')
        console.log(`you ${playerScore} computer ${computerScore}`) 
    }
}

function playerChoice() {
    // ask the player to enter there choise
    let playerChoice = window.prompt("type rock or paper or scissors").toLocaleLowerCase()
    // to make sure he typed correctly
    while (playerChoice != undefined) {
        if (playerChoice != 'rock' && playerChoice != 'paper' && playerChoice != 'scissors') {
            console.log('you must chose rock or paper or scissors!')
            playerChoice = window.prompt("type rock or paper or scissors")
        }
        else
            // when he type we return there choise
            return playerChoice
    }
}

function getComputerChoice() {
    // this array have the elemnts the computer can randomly pick from
    let computerChoices = ["rock", "paper", "scissors"]
    // here we return the chosen elemnt with math functions
    return computerChoices[(Math.floor(Math.random() * computerChoices.length))]
}