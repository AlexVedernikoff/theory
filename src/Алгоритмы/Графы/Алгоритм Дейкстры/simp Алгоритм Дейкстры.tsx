export const DijkstraReact = () => {
  console.log("Алгоритм Дэйскстры");
  // ******************************************************************
  const nodesList = ["a", "b", "c", "d", "e", "i"] as const;
  type TNodesList = (typeof nodesList)[number]; // "a" | "b" | "c" | "d" | "e" | "i"
  type TNode = { [Node in TNodesList]?: number }; // например { a: 2, d: 3 }
  type Tgraph = { [Node in TNodesList]: TNode };
  // взвешенный граф (указаны расстояния между точками)
  const graph: Tgraph = {
    a: { b: 2, c: 1, i: 3 },
    b: { a: 2, d: 3 },
    c: { a: 1, d: 1 },
    d: { b: 3, c: 3, e: 5 },
    e: { d: 5, i: 2 },
    i: { a: 3, e: 2 },
  };

  //   Создаём
  // объект parents, который будет хранить историю переходов по графу,
  // объект costs , который будет хранить стоимости переходов,
  // массив queue — очередь обхода вершин.

  // Простейший вариант функции. Находит наименьшую по стоимости цепочку
  // от  start до end, не вычисляя само значение стоимости.
  function dijkstra(graph: Tgraph, start: TNodesList, end: TNodesList) {
    const distances: TNode = {}; // costs (расстояние до точек / "стоимость" перехода между точками)
    const visited = new Set<TNodesList>(); // Set(2) {'a', 'c'}  // (сюда будем помещать посещённые вершины)
    const path = {}; //  {"точка, куда пришли" : "родительская точка, из которой пришли"} (история пути)

    for (const key in graph) {
      // { "a": 0, "b" ... "i" : Infinity }
      if (key !== start) {
        distances[key] = Infinity;
      } else {
        distances[start] = 0;
      }
    }

    console.table("distanses перед while = ");
    console.table(distances);
    // Заполняем объект distances.
    // для "a" стоимость перехода = 0, т.к. это стартовая точка.
    // для остальных вершин "b" ... "i" стоимость перехода = Infinity
    // !visited.has(end) = пока мы не посетили последнюю вершину
    let i = 0;
    while (!visited.has(end)) {
      console.log("\n\n****** Начинаем новый цикл while ****** ", i++);
      let lowestDistance = Infinity;
      let node: TNodesList | null = null;
      let key: TNodesList;
      console.log("lowestDistance = ", lowestDistance);
      console.log("Теперь мы перебираем все not visited вершины в объекте  distances");

      for (key in distances) {
        if (lowestDistance > distances[key]! && !visited.has(key)) {
          console.log("\nkey = ", key, ` distances[${key}] = ${distances[key]}`);
          console.log(
            `Так как lowestDistance=${lowestDistance} > distances[${key}]=${distances[key]}, 
            то принимаем distances[${key}] в качестве нового значения lowestDistance`
          );
          lowestDistance = distances[key]!;
          console.log(`И теперь значение lowestDistance = ${lowestDistance}`);
          console.log(
            `В качестве текущей вершины принимаем ту, значение до которой минимально.`,
            `distances[${key}]=${distances[key]}, вершина node = ${key}`
          );
          node = key;
        }
      }
      console.log("Текущая вершина node = ", node);
      const neighbours = graph[node!];
      console.log(`neighbours cоседи вершины ${node}  = `, neighbours);

      for (const key in neighbours) {
        console.log(`Вычисляем новую дистанцию newDistance для ${key}`);
        console.log(`distances[${node}] = `, distances[node!]);
        console.log(`neighbours[${key}] = `, neighbours[key]);
        const newDistance = distances[node!] + neighbours[key];
        if (newDistance < distances[key]) {
          console.log(
            `Так как newDistance=${newDistance} < distances[${key}]=${distances[key]}, 
            то назначем distances[${key}] новое значение newDistance`
          );
          distances[key] = newDistance;
          console.log(`А в объект path по ключу ${key} записываем ${node}`);
          path[key] = node;
        }
      }
      node && visited.add(node);
      console.log("visited = ", visited);
      console.log("distances = ");
      console.table(distances);
      console.log("path = ");
      console.table(path);
    }

    const shortPath: Array<TNodesList> = [];
    const distancesList: Array<number> = [];
    let current = end;
    while (current !== start) {
      shortPath.unshift(current);
      distancesList.unshift(graph[path[current]][current]);

      current = path[current];
    }
    shortPath.unshift(start);
    const distance = distancesList.reduce((acc, a) => acc + a);
    console.log(`Количество операций = `, i);
    return {
      короткий_путь: shortPath,
      стоимость_переходов: distancesList,
      общая_стоимость_пути: distance,
    };
  }

  // *** Проверка ***
  const nodes: TNodesList[][] = [
    ["a", "e"],
    ["e", "c"],
  ];
  nodes.slice(0, 1).forEach((node) => {
    console.log(
      `Самый короткий путь в графе между вершинами ${node[0]} и ${node[1]} = `,
      dijkstra(graph, node[0], node[1])
    );
  });

  // ******************************************************************
};
