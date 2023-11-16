// ***  Pick<ТИП, Значения_Которые_Нужно_Выбрать> *********************************

type Point3D = {
  x: number;
  y: number;
  z: number;
};

type Poin2d = Pick<Point3D, "x" | "y">;
// теперь type Poin2d = {  x: number; y: number}
