export const myDijkstraReact = () => {
  console.log("Пробую повторить алгоритм Дейкстры");
  const graph = {
    a: { b: 2, c: 1, i: 3 },
    b: { a: 2, d: 3 },
    c: { a: 1, d: 1 },
    d: { b: 3, c: 3, e: 5 },
    e: { d: 5, i: 2 },
    i: { a: 3, e: 2 },
  };
  // ***********************************************************
  function myDijkstraReact(graph, start, end) {
    const distances = {};
    const visited = new Set();
    const path = {}; // {"точка, куда пришли" : "родительская точка, из которой пришли"}

    for (const node in graph) {
      // { "a": 0, "b" ... "i" : Infinity }
      distances[node] = node === start ? 0 : Infinity;
    }

    console.log("Начальное состояние distances = ");
    console.table(distances);
    while (!visited.has(end)) {
      // ищем вершину с минимальной стоимостью и назначем её node.
      let [lowestDistance, node] = [Infinity, null];
      for (const key in distances) {
        if (lowestDistance > distances[key] && !visited.has(key)) {
          lowestDistance = distances[key];
          node = key;
        }
      }
      console.log(`Вершина с минимальной стоимостью ${node} (стоимость ${lowestDistance})`);
      // если найден более короткий путь от текущей вершины (node) до какой-либо из её соседей (key)
      // обновляем это значение в distances, и назначаем путь в key из node {"key": node}
      const neighbours = graph[node];
      for (const key in neighbours) {
        const newDistance = distances[node] + neighbours[key];
        if (newDistance < distances[key]) {
          distances[key] = newDistance;
          path[key] = node;
        }
      }
      visited.add(node);
      logInfo(visited, distances, path);
    }
    const shortPath = [];
    const sections = [];
    let current = end;
    while (current !== start) {
      shortPath.unshift(current);
      sections.unshift(graph[path[current]][current]);
      current = path[current];
    }
    shortPath.unshift(start);
    const totalCost = sections.reduce((acc, el) => acc + el);

    return { low_cost_way: shortPath, sections, total_cost: totalCost };
  }
  // *** Проверка ***
  console.log(myDijkstraReact(graph, "a", "e"));
  // ***********************************************************
};

function logInfo(visited, distances, path) {
  console.log(`visited = `, visited);
  console.log(`distances = `);
  console.table(distances);
  console.log(`path = `);
  console.table(path);
}
