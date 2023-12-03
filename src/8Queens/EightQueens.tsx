import React, { useEffect } from "react";
import { useState } from "react";
import { ChessBoard } from "./ChessBoard";
import { labelsArray } from "./constants";
export function EightQueens() {
  const row = (row: number) => labelsArray.map((cell) => `${cell}${row}`);
  const board = () => labelsArray.map((_, i) => row(8 - i));
  const [boardState, setBoardState] = useState<Array<Array<string>>>(() =>
    board()
  );
  // const [queensArray, setQueensArray] = useState<Array<Array<number>>>([]);

  const calculateQueenAttack = (qri: number, qci: number) =>
    labelsArray
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
          labelsArray[r] && labelsArray[c] && (r === qri && c === qci) === false
      );

  const calculateArrayOfQueensAttack = (arrOfQueens: number[][]) => {
    const attackArray: number[][] = [];
    arrOfQueens.forEach(([qri, qci]) => {
      // console.log(`Вычисляем атаку для ферзя ряд ${qri} ячейка ${qci}`);
      if (attackArray.some(([row, cell]) => row === qri && cell === qci)) {
        throw new Error(
          "Ошибка! Вы пытаетесь поставить ферзя на атакованную позицию!"
        );
      }
      const result = labelsArray
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
      attackArray.push(...result);
    });
    // console.log("attackArray = ", attackArray);
    return attackArray;
  };

  const putArrayOfQueensOnBoard = (queensArray: number[][]) => {
    const newBoardState = board();
    queensArray.forEach(([Qrow, Qcell]) => {
      newBoardState[Qrow][Qcell] = "QN";
    });
    calculateArrayOfQueensAttack(queensArray).forEach(
      ([r, c]) => (newBoardState[r][c] = "AT")
    );

    setBoardState((prevBoardState) => {
      console.log("70 queensArray = ", queensArray);
      // const newBoardState = [...prevBoardState];
      const newBoardState = board();
      queensArray.forEach(([Qrow, Qcell]) => {
        newBoardState[Qrow][Qcell] = "QN";
      });
      calculateArrayOfQueensAttack(queensArray).forEach(
        ([r, c]) => (newBoardState[r][c] = "AT")
      );
      return newBoardState;
    });
    return newBoardState;
  };

  const putQueenOnBoard = (Qrow: number, Qcell: number) => {
    setBoardState((prevBoardState) => {
      const newBoardState = [...prevBoardState];
      newBoardState[Qrow][Qcell] = "QN";
      calculateQueenAttack(Qrow, Qcell).forEach(
        ([r, c]) => (newBoardState[r][c] = "AT")
      );
      return newBoardState;
    });
  };

  useEffect(() => {
    console.log(`boardState в начале useEffect() = `);
    let counter = 0;
    let boardStateNative = board();

    console.table(boardStateNative);
    (function qalculateQueen(
      row = 0,
      queensArray: number[][] = [],
      boardStateNative = board()
    ) {
      // if (row === 8) return;
      console.log(`boardStateNative[${row}] = `, boardStateNative[row]);
      const cellsToPushQueen = boardStateNative[row]
        .map((cell, i) => cell !== "AT" && i)
        .reduce(
          (acc: number[], el) => (el || el === 0 ? acc.concat(el) : acc),
          []
        );
      if (!cellsToPushQueen.length) return;

      console.log(`список ячеек, куда можно поставить ферзя в ряду ${row}: `);
      console.table(cellsToPushQueen);

      queensArray.length !== 8 &&
        cellsToPushQueen.forEach((cellIndex) => {
          // setTimeout(() => {
          queensArray = queensArray.slice(0, row);
          queensArray[row] = [row, cellIndex];

          if (queensArray.length === 8) {
            console.log("ПОбеда!!!!!!!!!!!!!!!!!!!!!!!!!!!");
            setTimeout(() => putArrayOfQueensOnBoard(queensArray), 1000);
            counter++;
            return;
          }

          boardStateNative = putArrayOfQueensOnBoard(queensArray);
          qalculateQueen(row + 1, queensArray, boardStateNative);
          // setTimeout(
          //   () => qalculateQueen(row + 1, queensArray, boardStateNative),
          //   100 * cellIndex
          // );
          // }, 100 * cellIndex);
        });
      console.log("counter = ", counter);
    })();
  }, []);

  // useEffect(() => {
  //   (function calculateNewQueen(row = 0, queensArray: number[][] = []) {
  //     console.log(`Вычисляем координаты  ферзя для ряда ${row}`);
  //     const cellToPushQueen = boardState[row].findIndex(
  //       (cell) => cell !== "AT"
  //     );
  //     // console.log("cellToPushQueen = ", cellToPushQueen);
  //     if (cellToPushQueen === -1) {
  //       console.log("Невозможно решить задачу для ряда = ", row);
  //       return;
  //     }
  //     queensArray.push([row, cellToPushQueen]);
  //     putArrayOfQueensOnBoard(queensArray);
  //     // putQueenOnBoard(row, cellToPushQueen);
  //     if (row < 5) {
  //       setTimeout(() => calculateNewQueen(row + 1, queensArray), 1000);
  //     } else {
  //       console.log("ПОбеда!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
  //     }
  //   })();
  //   console.log("boardState = ", boardState);
  // }, []);

  return (
    <>
      <h1>Задача о восьми ферзях</h1>
      <ChessBoard boardState={boardState} />
    </>
  );
}
