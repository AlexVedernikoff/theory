/* eslint-disable react/jsx-pascal-case */
/* eslint-disable react/jsx-no-comment-textnodes */
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
import { Maze } from "./Обход Лабиринта/React";
import { LabyrinthNative } from "./Обход Лабиринта/LabyrinthNative/LabyrinthNative";
import { ReactCachingDecorator } from "./Теория/декораторы";
import {
  AppM,
  AppMb,
  Mosbirzja,
  Mosbtasks,
} from "./interviewTasks/Мосбиржа/мосбиржа";
import { ArrayMySortPolyfill } from "./Полифилы/array_sort()";
import { DragDropNative } from "./Теория/Drag&Drop";
import { myData } from "./Теория/myData";
import { commonElementsOfArrays } from "./Теория/Утилиты массивов";
import { DragDrop_ver20 } from "./Теория/Drag&Drop_ver2.0";
import { DragDrop_ver30 } from "./Теория/Drag&Drop_ver3.0";
import { treeByLevels, treeByLevels1, treeOne } from "./Теория/treeByLevels";
import { BinarySearchTree } from "./Теория/BinarySearchTree";
import { BinarySearchTreeLitvinova } from "./Теория/Бинарное дерево";
import { EightQueens } from "./8Queens";
import { modifyMatrix } from "./test_2";
import { BinarySearchReact } from "./Алгоритмы/Бинарный поиск";
import { BFS_GraphReact } from "./Алгоритмы/Графы/BFS графа в ширину";
import { test } from "./test";
import { quickSortReact } from "./Алгоритмы/сортировка вокруг опорного элемента";
import { bubbleSortReact } from "./Алгоритмы/пузырьковая сортировка";

const App: React.FC = () => {
  // ArrayFindUniquePolyfill();
  // ArrayMyFlatPolyfill();
  // RgetValue();
  // TestTypescript01();
  // console.log("dropDownItems = ", dropDownItems());
  // this_context(); // лекция про потерю контекста
  // test();
  // Mosbirzja();

  // ArrayMySortPolyfill();   // 1 полифил на array.sort()
  // LabyrinthNative();       // 2 Задача про обход Лабиринта на чистом js
  // ReactCachingDecorator(); // 3 Декораторы

  // myData.getFullWeeksDiff("November 16, 2023", "November 17, 2023");
  // myData.getFullWeeksDiff("September 01, 2023", "September 07, 2023");
  // myData.getFullWeeksDiff("September 01, 2023", "December 08, 2023");

  // const arr01 = ["a", "c", 1, 2, 3, 4, 5, 1];
  // const arr02 = ["a", "b", 1, 6, 3, 7, 5];
  // console.log("common(arr01, arr02) = ", commonElementsOfArrays(arr01, arr02));

  // console.log(treeByLevels(treeOne)); // Задача на преобразование бинарного дерева в плоский массив
  // console.log(treeByLevels1(treeOne));
  // modifyMatrix(4, 3);

  // BinarySearchReact(); // (1) алгоритм бинарного поиска по отсортированному списку
  bubbleSortReact(); // (2) алгоритм пузырьковой сортировки массива
  // quickSortReact(); // (3) алгоритм сортировки массива вокруг опорного элемента

  // BFS_GraphReact();
  // test();
  return (
    <div className="App">
      <EightQueens />
      {/* <BinarySearchTree /> */}
      {/* <BinarySearchTreeLitvinova /> */}
      {/* <DragDrop_ver30 /> */}
      {/* <DragDrop_ver20 /> */}
      <DragDropNative />
      {/* <Maze /> Задача про обход Лабиринта */}
      <Buttons />
      <CounterEffector />
      <Salary />
      <Grid>
        <Row color="green" render={true} />
        <Row color="blue" render={true} />
        <Row color="tomato" render={false} />
      </Grid>
      {/* <UseDebounce /> */}
      {/* <AppM /> */}
      {/* <AppMb tasks={Mosbtasks} /> */}
    </div>
  );
};

export default App;
