function pathFinder(maze) {
  let testMaze = maze.split("\n").map((str) => str.split(""));
  const createVisualMaze = () => maze.split("\n").map((str) => str.split(""));

  let able = true;
  let vizualMaze;

  testMaze.forEach((row, r) => {
    row.forEach((cell, c) => {
      if (!able) return;
      if (r === 0 && cell === "W") {
        // starting a new verification cycle from the top row
        vizualMaze = createVisualMaze();
        checkCell(r, c);
      } else if (c === row.length - 1 && cell === "W") {
        // starting a new verification cycle from the right wall
        vizualMaze = createVisualMaze();
        checkCell(r, c);
      }
    });
  });

  function checkCell(r, c) {
    if (!able) return;
    if (r === testMaze.length - 1 || c === 0) {
      able = false;
    }
    vizualMaze[r][c] = "C";
    const checkDirections = [
      [-1, -1],
      [-1, 0],
      [-1, 1],
      [0, -1],
      [0, 1],
      [1, 0],
      [1, -1],
      [1, 1],
    ];
    checkDirections.forEach((dir) => {
      const [rowToCheck, cellToCheck] = [r + dir[0], c + dir[1]];
      if (
        testMaze[rowToCheck] &&
        testMaze[rowToCheck][cellToCheck] === "W" &&
        vizualMaze[rowToCheck][cellToCheck] !== "C"
      ) {
        checkCell(rowToCheck, cellToCheck);
      }
    });
  }

  return able;
}
