import React, { ChangeEvent, useLayoutEffect } from "react";
import { useState } from "react";
import { ChessBoard } from "./ChessBoard";
import { labelsArray } from "./constants";
export function EightQueens() {
  const row = (row: number) => labelsArray.map((cell) => `${cell}${row}`);
  const board = () => labelsArray.map((_, i) => row(8 - i));

  const [boardState, setBoardState] = useState<Array<ReturnType<typeof board>>>(
    []
  );

  const [solutionNumber, setSolutionNumber] = useState<number>(0);

  const handleSolution = (e: ChangeEvent<HTMLInputElement>) => {
    if (isNaN(Number(e.target.value))) return;
    setSolutionNumber(Number(e.target.value));
  };

  const calculateArrayOfQueensAttack = (arrOfQueens: number[][]) => {
    const attackArray: number[][] = [];
    arrOfQueens.forEach(([qri, qci]) => {
      if (attackArray.some(([row, cell]) => row === qri && cell === qci)) {
        throw new Error(
          "Ошибка! Вы пытаетесь поставить ферзя на атакованную позицию!"
        );
      }
      const queenAttacks = labelsArray // массив атак для каждого ферзя
        .reduce((acc: number[][], _, i) => {
          acc.push(
            [qri - i, qci - i],
            [qri - i, qci + i],
            [qri + i, qci - i],
            [qri + i, qci + i],
            [qri, i],
            [i, qci]
          );
          return acc;
        }, [])
        .filter(
          ([r, c]) =>
            labelsArray[r] &&
            labelsArray[c] &&
            (r === qri && c === qci) === false
        );
      attackArray.push(...queenAttacks);
    });
    return attackArray;
  };

  const putArrayOfQueensOnBoard = (queensArray: number[][]) => {
    const newBoard = board();

    queensArray.forEach(([Qrow, Qcell]) => {
      newBoard[Qrow][Qcell] = "QN";
    });
    calculateArrayOfQueensAttack(queensArray).forEach(
      ([r, c]) => (newBoard[r][c] = "AT")
    );

    queensArray.length === 8 &&
      setBoardState((prevBoardState) => {
        const newBoardState = [...prevBoardState];
        newBoardState.push(newBoard);
        return newBoardState;
      });

    return newBoard;
  };

  useLayoutEffect(() => {
    const time1 = new Date();

    (function qalculateQueen(
      row = 0,
      queensArray: number[][] = [],
      boardStateNative = board()
    ) {
      const cellsToPushQueen = boardStateNative[row].reduce(
        (acc: number[], cell, i) => (cell !== "AT" ? acc.concat(i) : acc),
        []
      );

      if (!cellsToPushQueen.length) return;

      cellsToPushQueen.forEach((cellIndex) => {
        queensArray = queensArray.slice(0, row);
        queensArray[row] = [row, cellIndex];

        if (queensArray.length === 8) {
          putArrayOfQueensOnBoard(queensArray);
          return;
        }

        boardStateNative = putArrayOfQueensOnBoard(queensArray);
        qalculateQueen(row + 1, queensArray, boardStateNative);
      });
    })();
    const time2 = new Date();

    console.log(
      `Время выполнения задачи ${time2.valueOf() - time1.valueOf()}мс`
    );
  }, []);

  return (
    <>
      <Typography>Задача о восьми ферзях</Typography>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontFamily: "Playfair Display",
        }}
      >
        <div>
          <ChessBoard boardState={boardState[solutionNumber] || board()} />
        </div>
        <div style={{ width: "200px" }}>
          <div>решений найдено: </div>
          <div>{boardState.length}</div>
          <label>
            <div>Введите номер решения (0 - {boardState.length - 1})</div>
            <input value={solutionNumber} onChange={handleSolution} />
          </label>
        </div>
      </div>
    </>
  );
}

interface IProps {
  children: string;
}

export const Typography: React.FC<IProps> = ({ children }) => {
  return <h1 style={{ fontFamily: "Playfair Display" }}>{children}</h1>;
};
