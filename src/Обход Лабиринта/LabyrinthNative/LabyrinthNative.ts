export const LabyrinthNative = () => {
  console.log(" LabyrinthNative()");

  const maze = `......W....WW.........................W..W.....W...WW......W...W..............W........WW..WW.WWW.W.
......WW...W.W.WW.......W..W.....W.....W.....W.W.W.W...W.W.W...........W....W...W.....W....WW......W
.W..W.....W..W.........W.W...W............WW.W.W.....W.W.W.....W..W.W.WWW..WW..WW..W.W.......W....WW
.W.......W.W.......WWW......WWW...W...WWW.W.......W.W......WW...W....W.WW.....W....WW..W............
W........WW..W.W.............W.W..WWWW.....W......W.W.W.W.W...W.W.W........W...W..W.................
....WW.W....W....W..WW..WW.....WWWWWW..WW..W...W........W.........WW.W....W.........WWW.W.W.....WW..
...W...W...W...W...W.W...W...W....W...W..W.WW.W.W..W.WW.WWW.......W.W.....WW....W..W.......W.......W
.W.WW...............WW..W.W.WW..W.WW..W.....W....WW.WWW.W...W...W...WW...W......W..WW.W.WW.W...W.WW.
W...W...W........W..W.....W..WW.W..W..W...W...WWW.W...W.WW.W........W.WW...W..W.W....W....WW.W..WW..
.........W.W....W.....W.WW.W..W.W.W.W.WW.....WWW.....W....W..WWW..WW.W.....W.WW......W.W...W........
........WWW..W......W.....W....W.W.....W.WW..W.W.......WW..WW.WW...WW.W......WWW....WW.W.....WW.....
WW...WWWW...W.WW.W.....W..........WWW........W.......W.............W...W.......W.W.W..W..W..W.......
W...................W.......W.W.W...WWW...W.....W.W.WWW...W..WW......W......W.WW.....W..W.W.WW.....W
.....W.W..W.W....WW.....W....W.....WW..WW.W.W.W..W.W..W.........WW.W.W.WW...WW..WW.WW...W.W.....WW..
..W....W.W...W...W.WW....W..W..W........WW..W..W.......W.W...WW......W....WW.W..W.W.......W.......WW
W.WW...W..W........W...WWWW.W...W.W.......W.........W..W..W.W..W.W...W.WW..WW.....W......WW.WWW.WW.W
.....W..W.....W......WW.....W..WW........W.W.......W...W.W.W.W..W.W...W.......W......W..W.W..WW.W...
W.W..WW...W.W....W...W.....W.......W......W..W..W....WW.WW....WWW.W..W...W.W.W....W..WWW....W......W
..WW..W..W...W....W.W.W........W.W...W.W..........WW....W.........W......W..W...W..W......W.......W.
.W.W.W........W.WW.W...WWWW.W.W......W....WW....W....W.W...W..W...W...W.......W......WW.W...W.W..W..
.....W..WW...W...W.......WWWW......W.W..WW...W....W.W.WW...W.W.........WW.WW.WW...W.W.WW...W....WW..
....W.......W...WWW.WWW.W.W..W.....W..W...W....W.......WW...WWW.......WW....W.WW......W..WW.W.W.....
W.W.W.........W.....W..................WWW..W....WW.W....W....W.W...W.WW..W....W.W....WWW.WW..W.WW..
W.W.WW...........WWW.W.W....W...W..W.W......W.........W.WW......W..WWWWWW..W.W.W.WW.W...WWW....WW...
W....W.W..........WW.W..W....W..W......W..W.W...W.....W..W.W..W.W.W.W.....W.W.W...WW.W.W.......WW.W.
W..WW....W............WWW..W.W.......W..W..WWWW.WWWW........W.W....W.....W..WW........W....W.....WWW
.WWWW....WW.WW..W....W....W..W.W.W.W......W........W.W.W.W...W.W..WW.....W.W.WW.W.....W.....WW....W.
..W.W....W.....W...WWW...W.....W...WW.W............W....W...W......W..W.................W.W......W..
.WW....W...W...W..WWW...W.W....W.W.W.W......W...........W.WW...W.W....WWW.W..W...W.WWWW.W......WW...
WW......W.WW.WW.W.W.....WW.W...W.W.....W.....W........W..W.WW...W.W...W.....W....W..WW..............
....W...W.W.WW.........W......W...WW...WWWW...W..W..WW...WWW..W.....W...W.WW.W...W.WW....W..W.......
.....W...W.....W..W.W...W...W.....W.W....W.W.W...WWWWW.WW.......W...W.W..W...W.W.....WW......W....W.
.W.....W.......W...............W........W.WWWW..........WWW...W.W.......W..W.WWWW.WW....WW..W..W.W..
.....WW....WW..W..W...........WW..W.....WWW.W......W..W.WW...WW.WW......W.........W....W.....W......
....W.....WWW..W.W.W.......WW..WW.WWWW.W....W....WW...W..WW.W..WWW..W...W...WW......W.......W..WW.W.
......W.W..W......W.......W........W...W..W....W.WWWW....W.W.W.......W..W.W..W.W...WW....WWWWWW..W..
...W..W....W.W..W..W..............W..W..........W.........W.WWW.W......W..W.WWW..W.....W.......W...W
....W.W.....WW.W.....W.W...W..............WW....W...W.W..WWWWW..W..W.W.......W...WWW..W...W.W..W..W.
.WWWW...W....WWW....W.....W..W....W........W...........W...W...W......WW......WWWW.W...........W....
.W........WW.WW....W.WW.WW.W.WW.W....W..W...WW....WW.....W..W.W.W..W...W....W...W...W...W...WW......
.......W.W.......W.....W.W........W...W....W...W....W..W.WW..W.........WW....WW.....W..............W
WW......W...W.............W......WWW..W...W..WW.........W..W.W......W............W.W.W......W.W.....
.W....WWWWWW........WWW......W.W.........W.W......WW.W..WW.WW...........W......W....W......W........
W.................WW..WW.WW.WW.WW...W.WW......WW.....WWW..WW.WW....W...WW.W...W.....W.....W..W..W.WW
WWW.W.W..W.W.W.WW...W...W....W.......W.W...W....................W.WWWW....W.W.W..W.W.....W...WWWW.W.
.....W...W...WWW..WW...W...WW...W..W.W.WW......W.W.W....W.....W....W...W.W.W.......WW..W.W........WW
.........W..WW.W..WW......W...W.WW.W....W...........WW......WW..W.....W.W..W...W.....WW...W......W..
....W...W..W......W...........W......W..W.........W.W...W.............W...W..WWWWW.....W.....W.W.WW.
.W...W..W.....WW.WWW.W.W....WW.WW..W.WWW..WWWWW..........W....W......W......W.W.W.W..W..........W.WW
..........W.W.W..W.W...W...W.W.WW.........W....WW.W...WW.W...W........W..W..W.W.......W..WW..W....WW
W..........W......W.....WW.......W........W.......W.......W.......W..W.........W.........WWWW.......
....W......W....W................W.W.WWW...W.......WW...W.W.W.W......WW..W..........WW.W....W.WW..WW
............W....W.W....W....WW.W.......W........WWW...W.........W...W..W.W..W.....W.W...W..W...W..W
........WW.........WWW...W.W....W...W.W..WW....W.......W..WWWWW......W...........WW.WW.....W...WWW..
WW........W......W...WW....WW...WW.....W..W...........WW....WWW...WW.W.WWW....W....W.......WW.W...WW
......W..WWWWWWW...W..WW.W..W....W.W..W...W....W...W.....W.W.W...WW....W..W...W....W.WWW...W..W.....
WW......W....W..WWW........W..........W..W.W.WWW..W...W..W.....W.......W..WW.WW...WW..W.....WW.WWW..
WW.W........W......WW.WW..WW..W........W..W....W.W.....W..W....W.WW....W...W.W....W....W..WW...WW...
W......W.W...........W.W.....W........W............W..W.....W...WWWW...W..WW....W.......W....W.W.W..
...W..W.....WWWW.W..W..W.WW.W..........WWW....W....WW.....W..W...W......WWW....W...W..W.WWWW.W......
....W....W...........W...W..W..WW...W.........WW....WW.W..WW...W......WWW.......WW......WWW.W.W.W...
.WW.W..W..W.WW....W..WW..........W..WW....W........W.....W.W.W...W.......W......WWW.....W........W..
..W....WWWW.......WWW...W...W...W.WW........W.W...............WW..WW.......W......W..W.....W..W.W..W
W..WW...W...W.....WW.W.W.WW..W...W.WW......WW.W....W..W..W.W.W..W.W.W....WW..WW.W.....W............W
..W.....W.......WW.W..........W..W.......W..WW.WW.....WW.W......W..W....W.WW.W.WW...W.W......W...W.W
...WWW.WW.W.WW.......W.........W..W..W...W.W......W..........W....W.W...W.W..W.W....WW........WW...W
..........W..........W..W........WW.W.......W.W....W..W....W...W..W.W.W...W...W.....WW..WW....W....W
W..W....WW.W........W...WWWW........WWW...W.....WWW..WW.......W..W.W.W...W....W........WWW.......W..
W..W......W.W.W.W............WW.WW.W..W........WW.WW...WWW.W....W.W.....W.W..W..W.....W...W....W.W..
..W.......W....W......WW................W..W.W....W.W....W..........W......W...W.......W...W....WWW.
W.......WWW..W.......WW...W......WW.WW.............W.......W....WWWWWWWWW....WWW......W.WW...W......
....W.W......WW....WW.....WW.W.W.W.W.WW......W.W..W...WW.W..WW......W..WWW...WW..W...WWWW.W...W.W..W
...W.W.W.......WW.W......W...W...WW............WWW...W...WW.WW...WW..WW..W......W.WW...W...W.W...WW.
..W..WWWW.....WW.WW...W.....W.....W..WW....W....W......W..W....W......W...W.W.W.W.....W......W..WW..
W...W.WW......W....W.W......W....................WW.......W.W..WWW.W.W...W.WWW.........W.......W.W..
.W.....W......W..WWW...W.W..W.........WW...W..WW.....W..W....WW..W.W.W.WW...WW.W..WW.WWW.WW.W..W....
W.....WW....WWW.W..W.WW.W.W.WW........W..W..WW..WWW..WWW.....W.....W...W.....WWW.WWWWW.........W...W
.....WW.......WWWW..W....W.W......W.W....W....W.....................W.W.WW..W.W.W.W.......W....WW.WW
W......W...W..WWW...W..WW.W.W...W.WW.WW.W.W..WW......W.W......W............WWW.W.WW.W..W...W.W.WW..W
..W.W.W..WW....WW.........WW.W.W..........W.W.W.......W.W........W...W....WWW...W...W.W....W.....W..
W..W.....WWWW.......W........WW........W..W..W.WW..W..W....W.............W..W............WW..WW.WW.W
W..W..W...WW......WW.WW......W...W...WW.W..W......W.WW....W....W.....W..........WWW...W.W.W....W.W..
.......WW........W..WWW..W...W.....W....W..W...W.WW.WW.WW..W...............WWW..WW.WW.W.........WW..
......WW...WWW.....W....WW.W.W..W.W..W.WW...WW..WW.W.............W......W....W.....W.W..W.........W.
..WW....W.WWW.W.......W...W............WW........WW......W...W...W.W.......WW.WWWW........W.......W.
...W......W..W..WW..WW.W..W..W..W......WW.....W.WW...WW..WWW.W........W.........W.W.W..W....W.......
......WW.WW..WW...W..........WW........W....WW.W.....WW..W...WW.....WW......W.W..........W....W.WW..
W...W......W.W.W.W..W...W..W.....W..W.WW...W....W.WW....W.W..WW......W....W.W.....W.W.W...WW.W.W....
.........WW..W......W............W.........W....W...WW.WW.WW...W..........WW.W...W.....W...WW.....W.
WW.W.W.........WWW..W..W.W..W....W.W......WW....W.W..W.WW.W..W.W.......W.W....W.WWWWW..W.WW...WWWW.W
.W.WW.............W....W.W.W.W.W..W.....W..WW..........WW.....WW..W...W...WW.......W.....W..WW......
W..................W..W...W.W.W..W........WWWW......WW.....WWWW.WWW...W..W.W..W.....W...W.WWWW...W..
W......W..W.WWW..W........WW.................WW...W..W...........W.WWW........W....W.W..W..W.W......
.W........W...W...W...W.W...WW....WW.....W.W...W..W.W.W........W.W...W.........WWW....W...W.W.WWW...
...W.WW..........W..........W............W.W......W........W...W.W.W...W.....WWW.......WWW..WWWW..W.
WW...WW..WW......W.....WW..W...WWW.W.....W.....WWW....WW.W...W.WW.........W.W.WW....WW..W..........W
.W...............W.W.W.W....W..W....W........WW..WWWW.........W.WW..W.W...W..WW.W..WWWW.WWWWWW..W.W.
W....W.......W......WW........W.W......W....W...W.........W.....W.W.WW.W..WW..WWW......W....W.W.W..W
.....WWWW.W.............W............WWW....WW..W.W.W.W.....WWW...W.W...W.W.WWW..W.W..W.W.W.W.......
....W.WWW...W....W..W.WW.W..W.W.....W.WW..............WW....W...W.W.WW...W.W..W.W.........WWW.....W.`;

  type TMazeArr = Array<Array<string>>;

  function pathFinder(maze) {
    let testMaze = maze.split("\n").map((str) => str.split(""));
    const createVisualMaze = () => maze.split("\n").map((str) => str.split(""));

    console.log("Лабиринт в виде массива testMaze = ", testMaze);
    let able = true;
    let vizualMaze;

    testMaze.forEach((row, r) => {
      row.forEach((cell, c) => {
        if (!able) return;
        if (r === 0 && cell === "W") {
          console.log(
            "\n\n*** Начинаем новый цикл проверки от верхнего ряда ***"
          );
          vizualMaze = createVisualMaze();
          checkCell(r, c);
        } else if (c === row.length - 1 && cell === "W") {
          console.log(
            `\n\n*** Ячейка у правой стены row[${r}] cell[${c}] имеет значение "W" ***`
          );
          console.log(
            "*** Поэтому начинаем новый цикл проверки от правой стены ***"
          );
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
      console.log(`Ячейка row[${r}] cell[${c}] = C`);
      console.log("vizualMaze = ", vizualMaze);
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

  console.log("maze = ", pathFinder(maze));
};
