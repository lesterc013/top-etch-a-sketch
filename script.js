const numRows = 16;
const numCols = 16;
const totalCells = numRows * numCols;

// To hold all the cells
const gridClassName = ".grid";
const grid = document.querySelector(gridClassName);

/*
Main colouring logic is to attach event listeners to container.
Make use of event bubbling to then work on that element to colour.
*/

// Helper to colour a target cell based on its cellId
const colourTargetDiv = (cellId) => {
  const cellToColour = document.querySelector("#" + cellId);
  // Change its background colour
  cellToColour.style.backgroundColor = "black";
};

// This colours the first div selected and clicked down on
const colourIfMouseDownAndOverDiv = (e) => {
  // To prevent not-allowed cursor which comes when a mousedown followed by mousedrag
  e.preventDefault();
  colourTargetDiv(e.target.id);
};

// This colours a div if mouse button was held down and the pointer hovers over it.
const colourIfMouseBtnWasDownAndHoveredOver = (e) => {
  if (e.buttons === 1) {
    colourTargetDiv(e.target.id);
  }
};

grid.addEventListener("mousedown", colourIfMouseDownAndOverDiv);
grid.addEventListener("mouseover", colourIfMouseBtnWasDownAndHoveredOver);

// Set cell ID, then increment cellId every j iteration by 1
let cellId = 1;

// Then we iterate the num of rows to get the total num
for (let i = 0; i < numRows; i++) {
  // Create numRows number of divs intended to be stacked on top of each other in the container.
  const row = document.createElement("div");
  row.id = `row-${i + 1}`;
  row.classList = "row";
  row.draggable = false;

  // For each row, create the numCols number of cells and append into it
  for (let j = 0; j < numCols; j++) {
    const cell = document.createElement("cell");
    cell.classList = "cell";
    cell.id = "cell-" + cellId;
    cellId++;
    cell.draggable = false;
    row.appendChild(cell);
  }

  grid.appendChild(row);
}
