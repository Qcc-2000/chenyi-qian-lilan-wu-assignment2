/**
 * this function takes in a 2D array representing the current stage and returns a 2D array representing the next stage
 * @param currentStage 2D array representing the current stage
 * @returns 2D array representing the next stage
 */
export function NextStage(board) {
  const m = board.length;
  const n = board[0].length;
  const newGrid = [];
  for (let i = 0; i < m; i++) {
    const row = [];
    for (let j = 0; j < n; j++) {
      const cnt = countNeighbors(board, i, j);
      if (board[i][j] === true) {
        if (cnt < 2 || cnt > 3) {
          row.push(false);
        } else {
          row.push(true);
        }
      } else {
        if (cnt === 3) {
          row.push(true);
        } else {
          row.push(false);
        }
      }
    }
    newGrid.push(row);
  }
  return newGrid;
}
function countNeighbors(board, i, j) {
  let count = 0;
  for (let x = -1; x < 2; x++) {
    for (let y = -1; y < 2; y++) {
      const row = i + x;
      const col = j + y;
      if (x === 0 && y === 0) {
        continue;
      } else if (
        row >= 0 &&
        col >= 0 &&
        row < board.length &&
        col < board[i].length
      ) {
        if (board[row][col] === true) {
          count++;
        }
      }
    }
  }
  return count;
}

/**
 * initialize the state of the cells.
 * each cell has a 5% chance of being alive
 *  @param rows number of rows
 * @param cols number of columns
 */
export function initializeStage(rows, cols) {
  console.log("initialize stage");
  console.log(rows, cols);
  let state = [];
  for (let i = 0; i < rows; i++) {
    let row = [];
    for (let j = 0; j < cols; j++) {
      row.push(Math.random() < 0.05);
    }
    state.push(row);
  }
  return state;
}
