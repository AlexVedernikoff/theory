import React from "react";
import "./App.css";
import Buttons from "./ButtonsArr/buttonsArr";
import { Salary } from "./Salary/salary";
import { CounterEffector } from "./Effector/counterEffector";
// import { getValue } from "./typescript/keyof_typeof";
import { ArrayFindUniquePolyfill } from "./interviewTasks/array_findUnique()";
import { ArrayMyFlatPolyfill } from "./Полифилы/array_flat()";
import { RgetValue } from "./typescript/5 getValue (T, K extends keyof T)";
import { TestTypescript01 } from "./typescript/12 keyof any задача";
import { Grid, Row } from "./React children";
import { UseDebounce } from "./UseDebounce";
import { dropDownItems } from "./typescript/for...In";
import { this_context } from "./Теория/контекст this стрелочные функции";
import { test } from "./test";
import { Maze } from "./Обход Лабиринта/React";
import { LabyrinthNative } from "./Обход Лабиринта/LabyrinthNative/LabyrinthNative";

const App: React.FC = () => {
  // ArrayFindUniquePolyfill();
  // ArrayMyFlatPolyfill();
  // RgetValue();
  // TestTypescript01();
  // console.log("dropDownItems = ", dropDownItems());
  // this_context(); // лекция про потерю контекста
  // test();
  // LabyrinthNative(); //  Задача про обход Лабиринта на чистом js

  return (
    <div className="App">
      <Maze /> {/* Задача про обход Лабиринта */}
      <Buttons />
      {/* <CounterEffector /> */}
      <Salary />
      <Grid>
        <Row color="green" render={true} />
        <Row color="blue" render={true} />
        <Row color="tomato" render={false} />
      </Grid>
      {/* <UseDebounce /> */}
    </div>
  );
};

export default App;
