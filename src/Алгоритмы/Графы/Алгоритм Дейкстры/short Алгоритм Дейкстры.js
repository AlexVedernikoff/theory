export const shortListDijkstraReact = () => {
  console.log("Вывести кратчайшие пути из точки А во все точки");
  const graph = {
    a: { b: 2, c: 1, i: 3 },
    b: { a: 2, d: 3 },
    c: { a: 1, d: 1 },
    d: { b: 3, c: 3, e: 5 },
    e: { d: 5, i: 2 },
    i: { a: 3, e: 2 },
  };
  // ***********************************************************
  function allShortDistances(graph, start) {
    const distances = {};
    const visited = new Set();
    const path = {}; // {i: "a"} пришли в (.) "i" из (.) "a"
    for (const key in graph) {
      distances[key] = key === start ? 0 : Infinity;
    }
    console.table(distances);
  }
  // *** Проверка ***
  allShortDistances(graph, "a");
  // ***********************************************************
};
