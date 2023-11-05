export function this_context() {
  // *** 1 Класс имеет собственный контекст ***************************************

  class Person {
    constructor(name) {
      this.name = name;
    }
    sayHiFnc() {
      // runtime binding (получит контекст в момент вызова)
      console.log(`Hello func, my name is ${this.name}`);
    }
    // класс имеет собственный контекст, значение которого сохранит стрелочная функция при её создании.
    sayHiArr = () => {
      console.log(`Hello arrw, my name is ${this.name}`);
    };
  }
  const Ada = new Person("Ada");
  console.log("\n", "Контекст класса");
  Ada.sayHiFnc(); // оба метода работают
  Ada.sayHiArr(); // Hello, my name is Ada

  // *** 2 Объект не имеет собственного контекста *********************************

  const person = {
    name: "Дина",
    sayNameArr: () => {
      // ошибка!
      console.log(`Hi arrw! My name is ${this.name}`);
    },
    sayNameFnc() {
      // работает!
      console.log(`Hi func! My name is ${this.name}`);
    },
  };

  console.log("\n", "Контекст объекта");
  // person.sayNameArr();  // ошибка!
  person.sayNameFnc();
  console.log("\n");

  // *** 3 Потеря контекста *********************************

  class Dog {
    constructor(name) {
      this.name = name;
    }
    eat(food) {
      food.forEach(function (item) {
        console.log(`${this.name} is eating ${item}`);
      });
    }
  }
  const bim = new Dog("Bim");
  // bim.eat(["bone", "cookie"]);
  // Ошибка в runtime внутри метода .forEach() this будет равен undefined!

  // *** 4 Решение 1 ************************************************************
  // this, который мы хотим использовать в анонимной функции, нужно записать в переменную

  class Dog1 {
    constructor(name) {
      this.name = name;
    }
    eat(food) {
      const self = this;
      food.forEach(function (item) {
        console.log(`${self.name}(self) is eating ${item}`);
      });
    }
  }
  const bim1 = new Dog1("Bim");
  bim1.eat(["bone", "cookie"]);

  // *** 4 Решение 2 ************************************************************
  // привязять контекст функции при помощи .bind(this)

  class Dog2 {
    constructor(name) {
      this.name = name;
    }
    eat(food) {
      food.forEach(
        function (item) {
          console.log(`${this.name}(bind) is eating ${item}`);
        }.bind(this)
      );
    }
  }
  const bim2 = new Dog2("Bim");
  bim2.eat(["bone", "cookie"]);

  // *** 4 Решение 3 ************************************************************
  // передать this вторым аргументом в метод forEach()

  class Dog3 {
    constructor(name) {
      this.name = name;
    }
    eat(food) {
      food.forEach(function (item) {
        console.log(`${this.name}(forEach(..., this)) is eating ${item}`);
      }, this);
    }
  }
  const bim3 = new Dog3("Bim");
  bim3.eat(["bone", "cookie"]);

  // *** 4 Решение 4 ************************************************************
  // использовать стрелочную функцию

  class Dog4 {
    constructor(name) {
      this.name = name;
    }
    eat(food) {
      food.forEach((item) =>
        console.log(`${this.name}(arrow) is eating ${item}`)
      );
    }
  }
  const bim4 = new Dog4("Bim");
  bim4.eat(["bone", "cookie"]);

  // *** 5 Почему лучше использовать обычную функцию, а не стрелочную? ********
  console.log("Экземпляр класса Person = ", Ada);

  // *** 6 Потеря контекста при передачи метода в setTimeout() ********
  console.log("Передадим метод в setTimeout()");
  setTimeout(Ada.sayHiFnc); // обычная функция потеряла контекст (runtime binding)
  setTimeout(Ada.sayHiArr);
  console.log("Исправим потерю контекста в setTimeout()");

  setTimeout(function () {
    console.log("Создадим замыкание при помощи обычной функции");
    Ada.sayHiFnc();
  }, 1000);

  setTimeout(() => {
    console.log("Создадим замыкание при помощи стрелочной функции");
    Ada.sayHiFnc();
  }, 1000);
}

// https://habr.com/ru/companies/otus/articles/719138/
