let gridWidth = 16; //Could use one variable for both width and height, this is easier to read though.
let gridHeight = 16;
let cellSize = 50; //Not in use yet, will probably need this later.
let grid = [gridWidth,gridHeight];
const gridContainer = document.querySelector('#grid-container');
let setGridSize = ''

//Create the divs which makes up the grid.
for (let x = 0; x < grid[0]; x++) {
    for (let y = 0; y < grid[1]; y++) {
        let gridItem = document.createElement('div');
        gridItem.classList.add('grid-item');
        gridItem.textContent = `${x}, ${y}`;
        gridContainer.appendChild(gridItem);
    }
    
}

//Arrange the grid to be w*h
for (let i = 0; i < gridHeight; i++) {
    setGridSize += `${cellSize}px `;
}

gridContainer.style.gridTemplateColumns = setGridSize;
gridContainer.style.gridTemplateRows = setGridSize;



function test(){
    console.log(setGridSize);
}

test();