const gate = 0;
const wall = -1;
const INF = 2147483647;
const directions = [
  [-1, 0],
  [0, 1],
  [1, 0],
  [0, -1],
];

const testMatrix = [
  [INF, -1, 0, INF],
  [INF, INF, INF, 0],
  [INF, -1, INF, -1],
  [0, -1, INF, INF],
];

const wallsAndGates = (matrix) => {
  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
      if (matrix[row][col] === gate) {
        dfs(matrix, row, col, 0);
      }
    }
  }
  return matrix;
};

function dfs(grid, row, col, counter) {
  if (
    row < 0 ||
    row >= grid.length ||
    col < 0 ||
    col >= grid[0].length ||
    counter > grid[row][col]
  ) {
    return;
  }
  grid[row][col] = counter;
  for (let i = 0; i < directions.length; i++) {
    dfs(grid, row + directions[i][0], col + directions[i][1], counter + 1);
  }
}

wallsAndGates(testMatrix);

console.log(testMatrix);
