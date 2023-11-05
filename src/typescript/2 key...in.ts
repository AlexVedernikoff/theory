type languages = "English" | "Deutsche" | "Italian";

type grades = {
  [K in languages]: number;
};

type OptionsFlags<Type> = {
  [Property in keyof Type]: boolean;
};

// OptionsFlags<Type> перебираем все ключи объекта Type
// и создаёт новый объектный тип, присваивая этим ключам тип boolean

// [K in languages] если передаём union
// [Property in keyof Type]: если передаём тип

// если нужно передать в тип интерфейс в качестве джеренерика
type OptionsFromInterface<T extends string> = {
  [key in T]: boolean;
};
