/* eslint-disable @typescript-eslint/no-unused-vars */

export const TestTypescript01 = () => {
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

  // Задача: написать тип optionalRecord, в котором как ключи PersonList ("Max" | "Alex" | "Boris")
  // так и все поля в типе PersonProps (age | height) будут опциаональными

  // "keyof any" это то же самое, что "string | number | symbol"

  type optionalRecord<K extends string | number | symbol, T> = {
    [P in K]?: Partial<T>;
  };

  const peopleListOptional: optionalRecord<PersonList, PersonProps> = {
    Alex: { age: 23, height: 176 },
    Max: { age: 24 },
    // Boris: { age: 25, height: 180 },
  };
};
