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
    [".", ".", ".", "W", "W"],
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

  const Labyrinth: React.FC<IProps> = ({ maze }) => {
    const [currentCell, setCurrent] = useState([0, 0]);
    const [currentDirection, setDirection] = useState<TDirections>("right");
    const [win, setWin] = useState<boolean | undefined>(undefined);
    const [firstMoving, setFirstMoving] = useState(true);

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
    const iterateDirections = (currentDirection: TDirections) => {
      console.log("массив на входе = ", directions);
      console.log("текущее направление = ", currentDirection);
      let idx = directions.indexOf(currentDirection);
      console.log("id текущего направления в массиве = ", idx);
      let i = idx === 0 ? directions.length - 1 : idx - 1;
      const iterateArray = [...directions.slice(i), ...directions.slice(0, i)];
      console.log("новый массив для итерирования = ", iterateArray);

      const movings = iterateArray.filter((direction) =>
        checkDirection(direction)
      );

      console.log("возможные направление движения", movings);
      return movings.length ? movings[0] : false;
    };

    const checkWin = () => {
      if (
        currentCell[0] === maze[0].length - 1 &&
        currentCell[1] === maze.length - 1
      ) {
        setWin(true);
      }
    };

    const checkFalseWin = (newDirection) => {
      console.log("firstMoving = ", firstMoving);
      console.log("currentCell = ", currentCell);
      console.log("currentDirection = ", currentDirection);

      if (
        firstMoving === false &&
        currentCell[0] === 0 &&
        currentCell[1] === 0 &&
        newDirection === "right"
      ) {
        return true;
      }
    };

    useEffect(() => {
      if (win || win === false) return;
      checkWin();
      let interval;

      interval = setInterval(() => {
        const newDirection = iterateDirections(currentDirection);
        console.log("новое направление движения", newDirection);

        if (!newDirection || checkFalseWin(newDirection)) {
          setWin(false);
          return;
        }

        if (newDirection && newDirection !== currentDirection) {
          setDirection(newDirection);
        }

        newDirection && move(newDirection);

        setFirstMoving(false);
      }, 500);

      return () => clearInterval(interval);
    }, [currentCell, currentDirection, win]);

    return (
      <>
        <div className={s.flexCentered}>{structure}</div>
        {win && <div>Победа! Лабиринт пройден!</div>}
        {win === false && <div>Этот лабиринт пройти Невозможно!</div>}
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
