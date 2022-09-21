/**
 * @param {number[][]} grid
 * @return {number}
 */

//  Input: grid = [[2,1,1],[1,1,0],[0,1,1]]
//  Output: 4
//  Example 2:

//  Input: grid = [[2,1,1],[0,1,1],[1,0,1]]
//  Output: -1
//  Explanation: The orange in the bottom left corner (row 2, column 0) is never rotten, because rotting only happens 4-directionally.
//  Example 3:

//  Input: grid = [[0,2]]
//  Output: 0
//  Explanation: Since there are already no fresh oranges at minute 0, the answer is just 0.

//  Constraints:

//  m == grid.length
//  n == grid[i].length
//  1 <= m, n <= 10
//  grid[i][j] is 0, 1, or 2.

var orangesRotting = function (grid) {
  if (grid.length === 0) return 0;

  const fresh = 1;
  const rotten = 2;

  const directions = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1],
  ];
  let queue = [];
  let freshFruits = 0;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === rotten) {
        queue.push([i, j]);
      }
      if (grid[i][j] === fresh) {
        freshFruits++;
      }
    }
  }

  console.log(queue, freshFruits);
  let currentQueueSize = queue.length;
  let minutes = 0;

  while (queue.length > 0) {
    const currentOrange = queue.shift();
    currentQueueSize--;
    const [row, column] = currentOrange;

    for (let i = 0; i < directions.length; i++) {
      const currentDirection = directions[i];
      const newRow = currentDirection[0] + row;
      const newCol = currentDirection[1] + column;
      if (
        newRow < 0 ||
        newRow >= grid.length ||
        newCol < 0 ||
        newCol >= grid[0].length
      ) {
        continue;
      }
      if (grid[newRow][newCol] === fresh) {
        grid[newRow][newCol] = rotten;
        freshFruits--;
        queue.push([newRow, newCol]);
        console.log(queue);
        console.log();
      }
    }
    if (currentQueueSize === 0 && queue.length >= 1) {
      minutes++;

      currentQueueSize = queue.length;
    }
  }

  if (freshFruits > 0) {
    return -1;
  }

  return minutes;
};

console.log(orangesRotting([[1, 2]]));
