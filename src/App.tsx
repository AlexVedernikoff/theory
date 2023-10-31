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

const App: React.FC = () => {
  // const person = {
  //   name: "John",
  //   //  sayName: () => {
  //   //      console.log(`Hi! My name is ${this.name}`)
  //   //  }
  //   sayName() {
  //     console.log(`Hi! My name is ${this.name}`);
  //   },
  // };

  // person.sayName();

  class Article {
    id: number;
    content: string;
    constructor(id: number, content: string) {
      this.id = id;
      this.content = content;
    }
  }

  type ArticleType = InstanceType<typeof Article>;
  const article01: ArticleType = new Article(1, "текст статьи");

  console.log("article01 = ", article01);

  ArrayFindUniquePolyfill();
  ArrayMyFlatPolyfill();
  RgetValue();
  TestTypescript01();
  console.log("dropDownItems = ", dropDownItems());

  return (
    <div className="App">
      <Buttons />
      {/* <CounterEffector /> */}
      <Salary />
      <Grid>
        <Row color="green" render={true} />
        <Row color="blue" render={true} />
        <Row color="tomato" render={false} />
      </Grid>
      <UseDebounce />
    </div>
  );
};

export default App;
