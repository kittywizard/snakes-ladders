//display variables
const grid = document.getElementById('grid');
const scoreBoard = document.querySelector('.dice');
const overlay = document.querySelector('.overlay');
const p1Score = document.getElementById('p1-score');
const p2Score = document.getElementById('p2-score');
const btnDisplay = document.querySelector('.player-display');

//two variables for the player locations
let p1 = 0,
    p2 = 0;

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

    //add the players to the starting 'square'
    arr[0].classList.add('player-1', 'player-2');

    //display which player goes first
    let flip = Math.floor((Math.random() * 2) + 1); //flip a coin, essentially
    if(flip === 1){
        playerDetermine();
    } else {
        currentPlayer = false;
        playerDetermine();
    }
}

function playerDetermine() {
    if(currentPlayer) {
        btnDisplay.textContent = `Player 1`;
        currentPlayer = false;
    } else {
        btnDisplay.textContent = `Player 2`;
        currentPlayer = true;
    }
}

//rolls the dice when button is clicked.
//should probably hide the dice while the rest takes place - then switch player. different colors maybe?

function rollDice() {
    //generate a random number between 1 and 6
    let dice = (Math.floor((Math.random() * max) + min)); 
    rollBtn.style.display= 'none';

    //create a modal
    const modal = document.createElement('div');
    modal.classList.add('modal');
    modal.textContent = `Player rolled a ${dice}!`; //add in which player

    const btn = document.createElement('button');
    btn.textContent = 'Yay!';
    btn.classList.add('btn');
    modal.appendChild(btn);
    scoreBoard.appendChild(modal);

    //start the 'move' function
    movePiece(currentPlayer, dice);
}

function movePiece(player, num) {

    //clean this up
        //check to see if player has landed on a special snake or ladder piece
    if(player) {
        //P1
        arr[p1].classList.remove('player-1');
        arr[p1+num].classList.add('player-1');
        p1 += num;
    } else {
        //P2
        arr[p2].classList.remove('player-2');
        arr[p2+num].classList.add('player-2');
        p2 += num;
    }
    playerDetermine();
    rollBtn.style.display= 'inline-block';
}