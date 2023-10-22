const developer = {
  name: "Ada",
  age: 16,
  skills: ["JavaScript", "TypeScript"],
};

type devType = typeof developer;
type devTypeKeys = keyof typeof developer;
