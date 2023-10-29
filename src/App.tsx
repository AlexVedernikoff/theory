import React from "react";
import "./App.css";
import Buttons from "./ButtonsArr/buttonsArr";
import { Salary } from "./Salary/salary";
import { CounterEffector } from "./Effector/counterEffector";
import { getValue } from "./typescript/keyof typeof";
import { ArrayFindUniquePolyfill } from "./interviewTasks/array_findUnique()";
import { ArrayMyFlatPolyfill } from "./Полифилы/array_flat()";
import { TestTypescript } from "./typescript/testTypescript";
import { TestTypescript01 } from "./typescript/testTypescript01";
import { Grid, Row } from "./React children";
import { UseDebounce } from "./UseDebounce";

const App = () => {
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

  interface Response {
    responseStatus: number;
    content: string[];
  }

  interface Error {
    responseStatus: number;
    errorMessage: string;
  }
  type resType = Response | Error;

  function isResSuccess(res: resType): res is Response {
    return (res as Response).content !== undefined || "content" in res;
  }

  // const user = {
  //   name: "Ada",
  //   age: 16,
  // };

  // console.log(getValue(user, "name"));

  return (
    <div className="App">
      <Buttons />
      {/* <CounterEffector /> */}
      <Salary />
      {ArrayFindUniquePolyfill()}
      {ArrayMyFlatPolyfill()}
      {TestTypescript()}
      {TestTypescript01()}
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
