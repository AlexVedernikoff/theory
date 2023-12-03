import React from "react";
import { labelsArray } from "./constants";
import s from "./chessBoarsStyles.module.scss";

interface IRowProps {
  r: number;
}

export const Row: React.FC<IRowProps> = ({ r, boardState }) => {
  // console.log("ROW boardState = ", boardState);
  // console.log("row = ", r);
  const getClassName = (label, c) => {
    let classname =
      (r + c) % 2 === 0 ? `${s.cell} ${s.dark}` : `${s.cell} ${s.light}`;

    if (boardState[r][c] === "QN") {
      classname = classname.concat(` ${s.checked}`);
    }

    if (boardState[r][c] === "AT") {
      classname = classname.concat(` ${s.attacked}`);
    }

    return classname;
  };
  // ряд из восьми горизонтальных ячеек
  const cells = labelsArray.map((label, c) => {
    if (boardState[r][c] === "QN") {
      // console.log("Ферзь находится здесь!", r, c);
    }
    return <div key={c} className={getClassName(label, c)}></div>;
  });
  // подпись с номером ряда 1 - 8 слева.
  const rowIndex = <div className={`${s.rowIndex}`}>{String(r + 1)}</div>;
  return (
    <div className={`${s.row}`}>
      {rowIndex}
      {cells}
    </div>
  );
};

// function createRow(r: number) {
//   const row = document.createElement("div"); // создаём горизонтальный ряд клеток
//   row.classList.add("row");
//   const rowIndex = document.createElement("div"); // цифровая подпись 1-8 слева от ряда
//   rowIndex.classList.add("rowIndex");
//   rowIndex.innerText = String(r + 1);
//   row.appendChild(rowIndex);
//   labelsArray.forEach((_, c) => {
//     // поочерёдно создаём 8 ячеек шахматной доски и добавляем их в ряд row.
//     const cell = document.createElement("div");
//     cell.classList.add("cell");
//     (r + c) % 2 === 0
//       ? cell.classList.add("dark")
//       : cell.classList.add("light");
//     cell.id = `${r}${c}`;
//     row.appendChild(cell);
//   });
//   body?.appendChild(row);
// }
