/* eslint-disable @typescript-eslint/no-unused-vars */

export const TestTypescript01 = () => {
  console.log("Hello!");

  type PersonList = "Max" | "Alex" | "Boris";
  type PersonProps = {
    age: number;
    height: number;
  };

  const man: Record<PersonList, PersonProps> = {
    Alex: { age: 23, height: 176 },
    Max: { age: 24, height: 170 },
    Boris: { age: 25, height: 180 },
  };

  type test = typeof man;

  type optionalRecord<K, T> = {
    // [P in K]?: Partial<T>;
    [P in string | number | symbol]?: Partial<T>;
  };

  let man2: optionalRecord<PersonList, PersonProps> = {
    Alex: { age: 23, height: 176 },
    Max: { age: 24 },
    // Boris: { age: 25, height: 180 },
  };

  //   console.log("value of object[key] = ", getValue(developer, "name"));
  //   console.log("value of object[key] = ", getProperty(developer, "skills"));
};
