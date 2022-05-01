let gridWidth = 16; //Could use one variable for both width and height, this is easier to read though.
let gridHeight = 16;
let cellSize = 50;
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

//Attach a hover event listner to the grid
gridContainer.addEventListener('mouseover', function(e){
    if(e.target === 'grid-item'){
    //
    }
    e.target.classList.add('hover');
    console.log(e.target.classList);
})

function test(){
    console.log(setGridSize);
}

test();