import React from "react";
import { labelsArray } from "./constants";
import { Row } from "./Row";
import s from "./chessBoarsStyles.module.scss";

export const ChessBoard = ({ boardState }) => {
  const chessBoard = labelsArray.map((_, r) => (
    <Row key={r} rIndex={7 - r} boardState={boardState} />
  ));
  const letterLabels = (
    <div className={`${s.row}`} key={"ll"}>
      {labelsArray.map((label) => (
        <div key={label} className={`${s.letter}`}>
          {label}
        </div>
      ))}
    </div>
  );

  return (
    <div className={`${s.chessBoard}`}>
      {chessBoard}
      {letterLabels}
    </div>
  );
};
