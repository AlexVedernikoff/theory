import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import s from "./mazeStyles.module.scss";

export const Maze: React.FC = () => {
  const Maze1 = [
    [".", ".", ".", "."],
    [".", "W", ".", "."],
    [".", ".", "W", "W"],
    ["W", ".", ".", "."],
  ];

  const Maze = [
    [".", ".", ".", "W", "W"],
    ["W", "W", ".", ".", "."],
    [".", ".", ".", ".", "W"],
    [".", "W", "W", ".", "."],
    [".", ".", ".", ".", "."],
  ];

  interface IProps {
    maze: Array<Array<string>>;
  }

  const directionsMap = {
    right: [1, 0],
    down: [0, 1],
    left: [-1, 0],
    up: [0, -1],
  } as const;

  const directions = ["right", "down", "left", "up"] as const;

  type TDirections = keyof typeof directionsMap;

  function getRandomInt(max: number) {
    return Math.floor(Math.random() * max);
  }

  const Labyrinth: React.FC<IProps> = ({ maze }) => {
    const [currentCell, setCurrent] = useState([0, 0]);
    const [direction, setDirection] = useState<TDirections>("right");

    const getClassName = (cell: string, [i, j]: [number, number]) => {
      if (cell === "W") return `${s.cell} ${s.wall}`;
      if (i === currentCell[0] && j === currentCell[1])
        return `${s.cell} ${s.current}`;
      return `${s.cell}`;
    };

    const checkDirection = (newDirection: TDirections): boolean => {
      console.log("\ncheck текущая ячейка = ", currentCell);
      const newCell = [
        currentCell[0] + directionsMap[newDirection][0],
        currentCell[1] + directionsMap[newDirection][1],
      ];
      console.log("check новая ячейка = ", newCell);
      if (newCell[0] < 0) {
        console.log("Невозможно двигаться, мешает левая стена");
        return false;
      } else if (newCell[0] > maze[0].length - 1) {
        console.log("Невозможно двигаться, мешает правая стена");
        return false;
      } else if (newCell[1] < 0) {
        console.log("Невозможно двигаться, мешает верхняя стена");
        return false;
      } else if (newCell[1] > maze.length - 1) {
        console.log("Невозможно двигаться, мешает нижняя стена");
        return false;
      } else if (maze[newCell[1]][newCell[0]] === "W") {
        console.log("Невозможно двигаться, вы упёрлись в стену лабиринта");
        return false;
      }
      return true;
    };

    const move = (direction: TDirections) => {
      checkDirection(direction) &&
        setCurrent(([i, j]) => [
          i + directionsMap[direction][0],
          j + directionsMap[direction][1],
        ]);
    };

    const structure = maze.map((row, r) => (
      <div key={r} style={{ display: "flex" }}>
        {row.map((cell, c) => (
          <div key={c} className={getClassName(cell, [c, r])}>
            {cell}
          </div>
        ))}
      </div>
    ));

    useEffect(() => {
      let interval;
      if (
        currentCell[0] === maze[0].length - 1 &&
        currentCell[1] === maze.length - 1
      ) {
        alert("Вы успешно прошли лабиринт!");
      } else {
        interval = setInterval(() => {
          if (checkDirection(direction)) {
            move(direction);
          } else {
            console.log(getRandomInt(4));
            setDirection(directions[getRandomInt(4)]);
          }
        }, 800);
      }

      return () => clearInterval(interval);
    }, [currentCell, direction]);

    // const iterateDirections = (currentDirection: TDirections) => {
    //   console.log("массив на входе = ", directions);
    //   let idx = directions.indexOf(currentDirection);
    //   let i = idx === 0 ? directions.length - 1 : idx - 1;
    //   console.log("idx = ", i);
    //   setInterval(() => {
    //     if (i === directions.length) i = 0;
    //     console.log("текущий i = ", i, "элемент = ", directions[i]);
    //     checkDirection(currentDirection);
    //     i++;
    //   }, 20000);
    // };

    // const checkDirections = (arr, i) => {
    //   console.log("массив на входе = ", arr);
    //   setInterval(() => {
    //     if (i === arr.length) i = 0;
    //     console.log("текущий i = ", i, "элемент = ", arr[i]);
    //     i++;
    //   }, 1000);
    // };

    // setInterval(() => console.log("tick"), 2000);

    // iterateDirections(direction);

    return (
      <>
        <div className={s.flexCentered}>{structure}</div>
        <button onClick={() => move("right")}>right</button>
        <button onClick={() => move("down")}>down</button>
        <button onClick={() => move("left")}>left</button>
        <button onClick={() => move("up")}>up</button>
      </>
    );
  };

  return (
    <>
      <h1>Обход Лабиринта</h1>
      <Labyrinth maze={Maze} />
    </>
  );
};
