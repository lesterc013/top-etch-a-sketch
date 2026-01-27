/**
 * Creating the grid
 */

// Get reference to the grid class to populate the cells into
const gridClassName = ".grid";
const grid = document.querySelector(gridClassName);

const drawGrid = (cellsPerSide) => {
  // Need to delete all the children within the grid container first.
  while (grid.firstChild) {
    grid.removeChild(grid.firstChild);
  }
  // Set cell ID, then increment cellId every j iteration by 1
  let cellId = 1;

  // Then we iterate the num of rows to get the total num
  for (let i = 0; i < cellsPerSide; i++) {
    // Create numRows number of divs intended to be stacked on top of each other in the container.
    const row = document.createElement("div");
    row.id = `row-${i + 1}`;
    row.classList = "row";
    row.draggable = false;

    // For each row, create the cellsPerSide number of cells and append into it
    for (let j = 0; j < cellsPerSide; j++) {
      const cell = document.createElement("cell");
      cell.classList = "cell";
      cell.id = "cell-" + cellId;
      cellId++;
      cell.draggable = false;
      row.appendChild(cell);
    }

    grid.appendChild(row);
  }
};

// Initial render: draw a grid of 16x16
drawGrid(50);

// On button click
// Check if the input is a number between 1 and incl. 100
// If so, populate the grid
// else, send a message that number must be between 1 and 100.
const submitNumCellsBtn = document.querySelector("#submit-num-cells");
submitNumCellsBtn.addEventListener("click", () => {
  const cellsInput = document.querySelector("#num-cells-input");
  const parsedInt = parseInt(cellsInput.value);
  if (!Number.isInteger(parsedInt)) {
    alert("Please pass in only valid integers!");
    resetInputField(cellsInput);
    return;
  }

  if (parsedInt < 1 || parsedInt > 100) {
    alert("Valid integers from 1 to 100 only!");
    resetInputField(cellsInput);
    return;
  }

  // Once tests are passed, reset the grid
  drawGrid(parsedInt);
});

const resetInputField = (inputFieldElement) => {
  inputFieldElement.value = "";
  inputFieldElement.focus();
};

/*
Main colouring logic is to attach event listeners to container.
Make use of event bubbling to then work on that element to colour.
*/

// Helper to colour a target cell based on its cellId
const colourTargetDiv = (cellId) => {
  const cellToColour = document.querySelector("#" + cellId);

  // A RGB is 0-255
  // Get 3 random numbers between 0 and 255 incl.
  // Set this as the backgroundColor
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);

  // Change its background colour
  cellToColour.style.backgroundColor = `rgb(${r},${g},${b})`;
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
