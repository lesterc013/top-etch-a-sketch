const numRows = 16;
const numCols = 16;
const totalCells = numRows * numCols;

// To hold all the cells
const containerClassName = ".container";
const container = document.querySelector(containerClassName);

// One row will be a flex div
// The number of cols will determine how many cells within that one flex div

// Then we iterate the num of rows to get the total num

for (let i = 0; i < numRows; i++) {
  // Create numRows number of divs intended to be stacked on top of each other in the container.
  const row = document.createElement("div");
  row.id = `row-${i + 1}`;
  row.classList = "row";

  // For each row, create the numCols number of cells and append into it
  for (let j = 0; j < numCols; j++) {
    const cell = document.createElement("cell");
    cell.classList = "cell";
    row.appendChild(cell);
  }

  container.appendChild(row);
}
