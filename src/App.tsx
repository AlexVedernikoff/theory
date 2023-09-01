import React from "react";
import "./App.css";
import Buttons from "./buttonsArr";

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

  return (
    <div className="App">
      <Buttons />
    </div>
  );
};

export default App;
