// Получить тип, состоящий из значений (values) объекта WIZARD_NODE_TYPE

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
