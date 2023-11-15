export const Mosbirzja = () => {
  console.log("Собеседование на Мосбиржу");
  const User = {
    currentFilter: "active",
    store: [
      {
        name: "Sasha",
        status: "active",
      },
      {
        name: "Vasia",
        status: "not active",
      },
    ],
    // filter: function () {
    //   return this.store.filter(function (item) {
    //     return item.status === this.currentFilter;
    //   });
    // },
    // решение 1 метод .filter() принимает this вторым аргументом
    filter1: function () {
      return this.store.filter(function (item) {
        return item.status === this.currentFilter;
      }, this);
    },
    // решение 2 записать this в переменную
    filter2: function () {
      const self = this;
      return this.store.filter(function (item) {
        return item.status === self.currentFilter;
      });
    },
    // решение 3   .bind(this)
    filter3: function () {
      return this.store.filter(
        function (item) {
          return item.status === this.currentFilter;
        }.bind(this)
      );
    },
    // решение 4  стрелочная функция
    filter4: function () {
      return this.store.filter((item) => {
        return item.status === this.currentFilter;
      });
    },
  };
  console.log("решение 1", User.filter1());
  console.log("решение 2", User.filter2());
  console.log("решение 3", User.filter3());
  console.log("решение 4", User.filter4());

  //   **** Задача 2 *******************************************************
  console.log(1);

  setTimeout(() => {
    console.log(2);
  });

  console.log(3);
  Promise.resolve(4)
    .then(console.log)
    .then(() => console.log(5));
  console.log(6);
  // синхронный код 1 3 6
  // микрозадачи 4 5
  // макрозадачи 2
  // 1 3 6 4 5 2
  // console.log("1 3 6 4 5 2");

  //   *********************************************************************
};
