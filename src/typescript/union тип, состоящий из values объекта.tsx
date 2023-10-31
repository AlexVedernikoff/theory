/* eslint-disable @typescript-eslint/no-unused-vars */
// Получить union тип, состоящий из значений (values) объекта WIZARD_NODE_TYPE

export const WIZARD_NODE_TYPE = {
  TABLE: "table_wizard_node",

  MAP: "map_wizard_node",

  CARD: "card_wizard_node",

  GRAPH: "graph_wizard_node",

  INDICATOR: "indicator_wizard_node",
} as const;

type ValueOf<T> = T[keyof T];

type Value = ValueOf<typeof WIZARD_NODE_TYPE>;

// type Value = "table_wizard_node" | "map_wizard_node" | "card_wizard_node" | "graph_wizard_node" | "indicator_wizard_node";

// ***************************************************************************

const wizards = {
  Gandalf: "water magic",
  Saruman: "earth magic",
  Sauron: "fire magic",
  Galadriel: "air magic",
} as const;

type valueOf<T> = T[keyof T];
type wizardValues = valueOf<typeof wizards>;

// type wizardValues = "water magic" | "earth magic" | "fire magic" | "air magic"

type wizardsKeys = keyof typeof wizards;
type values = (typeof wizards)[wizardsKeys];

// Подобно тому, как в объекте мы читаем value, обращаясь по ключу obj[key]
// здесь мы получаем тип value, обращаясь к типу объекта по ключу.
// Передав union (список ключей keyof T), мы получаем сразу union из списка values.

// ***************************************************************************
// ************************ Утилиты TypeScript *******************************

// ReturnType
const getData = (name: string, age: number) => {
  return { age, name };
};

type NewType = ReturnType<typeof getData>;

// type NewType = {
//     age: number;
//     name: string;
// }

// Omit Исключает указанные поля из типа/интерфейса
// type person = { name: number; age: number; weight: number; height: number };
interface person {
  name: number;
  age: number;
  weight: number;
  height: number;
}
type personNarr = Omit<person, "weight" | "height">;

// ***************************************************************************

type person_1 = {
  name: string;
  age: number;
};

type person_2 = Partial<person_1>;
//name?: string | undefined
//age?:  string | undefined

// ***************************************************************************

class Article {
  constructor(id: number, content: string) {}
}

const article01 = new Article(1, "text");

console.log(article01);

// https://www.youtube.com/watch?v=Fgcu_iB2X04&t=1186s

// ***************************************************************************
