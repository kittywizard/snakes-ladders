//create a grid 1-55

const grid = document.getElementById('grid');
const scoreBoard = document.querySelector('.dice');
const p1Score = document.getElementById('p1-score');
const p2Score = document.getElementById('p2-score');
const btnDisplay = document.querySelector('.player-display');

let arr = [];
const gridLength = 55;
let currentPlayer = true; //where p1 = true, p2 = false

//variables for the dice
const min = 1;
const max = 6;

//event listeners and buttons
const rollBtn = document.getElementById('rollBtn');
const startBtn = document.getElementById('startBtn');
rollBtn.addEventListener('click', rollDice);
startBtn.addEventListener('click', createGrid);

//function to create the grid, initialized when the button is clicked
function createGrid() {
    startBtn.style.visibility = 'hidden';
    scoreBoard.style.display = 'inline-block';
    for(let i = 0; i < gridLength; i++) {
        let div = document.createElement('div');
        div.textContent = i+1;
        div.classList.add('square');
        arr.push(div);
        //make each square a different color - maybe a group of four/five colors
    }

    arr.forEach(square => {
        grid.appendChild(square);
    });

    //display which player goes first
    let flip = Math.floor((Math.random() * 2) + 1); //flip a coin, essentially
    if(flip === 1){
        //player 1 goes first, currentPlayer stays the same
        btnDisplay.textContent = `Player 1`;
    } else {
        //player 2 goes first, currentPlayer becomes false
        btnDisplay.textContent = `Player 2`;
        currentPlayer = false;
    }
}

function playerDetermine() {
    if(currentPlayer) {
        btnDisplay.textContent = `Player 1`;
    } else {
        btnDisplay.textContent = `Player 2`;
    }
}

//rolls the dice when button is clicked.
//should probably hide the dice while the rest takes place - then switch player. different colors maybe?

function rollDice() {
    //generate a random number between 1 and 6
    let dice = Math.floor((Math.random() * max) + min);

    //create a modal
    const modal = document.createElement('div');
    modal.classList.add('modal');
    modal.textContent = `${dice}`;
    scoreBoard.appendChild(modal);

    //start the 'move' function
    movePiece(currentPlayer, dice);
}

function movePiece(player, num) {
    //determine which player is up (pass in var??)
    //get dice roll result
    //move piece x of spaces
    //check to see if player has landed on a special snake or ladder piece
    //pop up modal to let them know what happened

    console.log(`${player} and ${num}`)
}