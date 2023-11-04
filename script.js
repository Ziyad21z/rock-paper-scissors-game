let playerScore = 0;
let computerScore = 0;
let round = 1;

const playerPara = document.querySelector('#player-score');
const computerPara = document.querySelector('#computer-score');
const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const scissorsBtn = document.querySelector('#scissors');
const footerDiv = document.querySelector('.footer')


function gameHistory(historyText) {
const historyPara = document.createElement('p')
historyPara.className = ''
historyPara.textContent = historyText;
footerDiv.appendChild(historyPara);
}

function getComputerChoice() {
    let computerChoices = ["rock", "paper", "scissors"];
    return computerChoices[(Math.floor(Math.random() * computerChoices.length))];
}

function getPlayerChoice(choise) {
    let playerSelection = choise;
    let computerSelection = getComputerChoice();
    if (playerScore === 5) {
        alert('you won the game will restart now')
        history.go();
    }
    if (computerScore === 5) {
        alert('you lose the game will restart now');
        history.go();
    }
    playRound(playerSelection, computerSelection);
    round++;
}

function playRound(playerSelection, computerSelection) {

    if (playerSelection === computerSelection) {
        playerPara.textContent = `player: ${playerScore}`
        computerPara.textContent = `computer: ${computerScore}`
        gameHistory(`round ${round} : tie  player: ${playerSelection} computer: ${computerSelection}`);
    }
    if (playerSelection === 'rock' && computerSelection === 'scissors') {
        playerScore = playerScore + 1;

        playerPara.textContent = `player: ${playerScore}`
        computerPara.textContent = `computer: ${computerScore}`
        gameHistory(`round ${round} : Player WIN  player: ${playerSelection} computer: ${computerSelection}`);
    }
    if (playerSelection === 'paper' && computerSelection === 'rock') {
        playerScore = playerScore + 1;
        playerPara.textContent = `player: ${playerScore}`
        computerPara.textContent = `computer: ${computerScore}`
        gameHistory(`round ${round} : Player WIN  player: ${playerSelection} computer: ${computerSelection}`);
    }
    if (playerSelection === 'scissors' && computerSelection === 'paper') {
        playerScore = playerScore + 1; ++playerScore;
        playerPara.textContent = `player: ${playerScore}`
        computerPara.textContent = `computer: ${computerScore}`
        gameHistory(`round ${round} : Player WIN  player: ${playerSelection} computer: ${computerSelection}`);
    }
    if (computerSelection === 'rock' && playerSelection === 'scissors') {
        computerScore = computerScore + 1;
        playerPara.textContent = `player: ${playerScore}`
        computerPara.textContent = `computer: ${computerScore}`
        gameHistory(`round ${round} : Computer WIN  player: ${playerSelection} computer: ${computerSelection}`);
    }
    if (computerSelection === 'paper' && playerSelection === 'rock') {
        computerScore = computerScore + 1;
        playerPara.textContent = `player: ${playerScore}`
        computerPara.textContent = `computer: ${computerScore}`
        gameHistory(`round ${round} : Computer WIN  player: ${playerSelection} computer: ${computerSelection}`);
    }
    if (computerSelection === 'scissors' && playerSelection === 'paper') {
        computerScore = computerScore + 1;
        playerPara.textContent = `player: ${playerScore}`
        computerPara.textContent = `computer: ${computerScore}`
        gameHistory(`round ${round} : Computer WIN  player: ${playerSelection} computer: ${computerSelection}`);
    }
}