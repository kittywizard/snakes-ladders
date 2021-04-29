//create a grid 1-55

const grid = document.getElementById('grid');

let arr = [];
const gridLength = 55;

function createGrid() {
    for(let i = 0; i < gridLength; i++) {
        let div = document.createElement('div');
        div.classList.add('square');
        arr.push(div);
    }

    console.log(arr);

    arr.forEach(square => {
        grid.appendChild(square);
    })

    //create the array and for 55 times, create a div and push it to the array
    //apply any classes for styling
    //
}

createGrid();