let gridWidth = 2; //Could use one variable for both width and height, this is easier to read though.
let gridHeight = 2;
let cellSize = 50;
//let grid = [gridWidth,gridHeight];
const gridContainer = document.querySelector('#grid-container');
let setGridSize = ''
const generateGridButton = document.querySelector('button'); //Grab a reference to "Generate grid" button

//Create the divs which makes up the grid.
function createGrid(width, height){

    for (let x = 0; x < width; x++) {
        for (let y = 0; y < height; y++) {
            let gridItem = document.createElement('div');
            gridItem.classList.add('grid-item');
            gridItem.textContent = `${x}, ${y}`;
            gridContainer.appendChild(gridItem);
        }
    }
    //Arrange the grid to be w*h
    for (let i = 0; i < width; i++) {
        setGridSize += `${cellSize}px `;
    }
    gridContainer.style.gridTemplateColumns = setGridSize;
    gridContainer.style.gridTemplateRows = setGridSize;
}

function removeCurrentGrid(){
    while(gridContainer.hasChildNodes()){
        gridContainer.removeChild(gridContainer.lastChild);
    }
    setGridSize = ''; //reset number of rows and columns
}

//Instantiate default grid on page load.
createGrid(gridWidth, gridHeight);


//Attach a hover event listner to the grid
gridContainer.addEventListener('mouseover', function(e){
    if(e.target === 'grid-item'){
    //
    }
    e.target.classList.add('hover');
    console.log(e.target.classList);
})

//Generate new grid after pressing "Generate grid" button
let gridSizeInput = '';
generateGridButton.addEventListener('click', () =>{
    gridSizeInput = prompt("How many squares do you want?") //Ask for the number squares per side for the new grid.
    removeCurrentGrid(); //Remove the current grid.
    createGrid(gridSizeInput,gridSizeInput); //Create a new grid based on user input.
})
function test(){
    console.log(gridContainer.hasChildNodes());
}

test();