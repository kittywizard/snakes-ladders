//create a grid 1-55

const grid = document.getElementById('grid');
const scoreBoard = document.querySelector('.dice');
const rollBtn = document.getElementById('rollBtn');
const startBtn = document.getElementById('startBtn');
const p1Score = document.getElementById('p1-score');
const p2Score = document.getElementById('p2-score');

let arr = [];
const gridLength = 55;

rollBtn.addEventListener('click', rollDice);
startBtn.addEventListener('click', createGrid);

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
}
function rollDice() {

}