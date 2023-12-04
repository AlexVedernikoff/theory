import React from "react";
import { labelsArray } from "./constants";
import s from "./chessBoarsStyles.module.scss";

interface IRowProps {
  rIndex: number;
  boardState: Array<Array<string>>;
}

export const Row: React.FC<IRowProps> = ({ rIndex, boardState }) => {
  const getClassName = (cIndex: number) => {
    let classname =
      (rIndex + cIndex) % 2 === 0
        ? `${s.cell} ${s.dark}`
        : `${s.cell} ${s.light}`;

    if (boardState[rIndex] && boardState[rIndex][cIndex] === "QN") {
      classname = classname.concat(` ${s.checked}`);
    }

    if (boardState[rIndex] && boardState[rIndex][cIndex] === "AT") {
      classname = classname.concat(` ${s.attacked}`);
    }

    return classname;
  };
  // ряд из восьми горизонтальных ячеек
  const cells = labelsArray.map((_, cIndex) => {
    return <div key={cIndex} className={getClassName(cIndex)}></div>;
  });
  // подпись с номером ряда 1 - 8 слева.
  const rowIndex = <div className={`${s.rowIndex}`}>{String(rIndex + 1)}</div>;
  return (
    <div className={`${s.row}`}>
      {rowIndex}
      {cells}
    </div>
  );
};
