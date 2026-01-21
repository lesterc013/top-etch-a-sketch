// Start small
// Create 9 divs first.
// try to grid them 3x3
const numRows = 3;
const numCols = 3;
const totalCells = numRows * numCols;

const containerClassName = ".container";
const container = document.querySelector(containerClassName);

// Every iteration create a new div element.
// All of the divs will have .cell so we can manipulate its styling in css.
// Set its ID to be what cell number it is - might be useful later on.
// Append it as a child of container
for (let i = 0; i < totalCells; i++) {
  const cell = document.createElement("div");
  cell.classList.add("cell");
  cell.id = i + 1;
  cell.textContent = "hi";
  container.appendChild(cell);
}
