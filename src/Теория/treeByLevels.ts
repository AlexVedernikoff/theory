// Вариант решения 1. Через объект resultMap
export function treeByLevels1(rootNode: Node, i = 0, resultMap = {}) {
  if (!rootNode) return [];
  const { value, left, right } = rootNode || {};
  const resultArr: number[] = [];
  !resultMap[i] ? (resultMap[i] = [value]) : resultMap[i].push(value);
  if (left) treeByLevels1(left, i + 1, resultMap);
  if (right) treeByLevels1(right, i + 1, resultMap);

  if (i === 0) {
    for (let j = 0; j < Object.keys(resultMap).length; j++) {
      resultArr.push(...resultMap[j]);
    }
  }

  return resultArr;
}

// Вариант решения 2. Через массив resultArr
export function treeByLevels(
  rootNode: Node,
  i = 0,
  resultArr: Array<Array<number>> = [[]]
) {
  if (!rootNode) return [];

  const { value, left, right } = rootNode || {};
  !resultArr[i] ? (resultArr[i] = [value]) : resultArr[i].push(value);

  left && treeByLevels(left, i + 1, resultArr);
  right && treeByLevels(right, i + 1, resultArr);

  if (i === 0) {
    return resultArr.flat();
  }
}

class Node implements INode {
  value: number;
  left: Node | null;
  right: Node | null;

  constructor(
    value: number,
    left: Node | null = null,
    right: Node | null = null
  ) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

export const treeOne = new Node(
  2,
  new Node(8, new Node(1), new Node(3)),
  new Node(9, new Node(4), new Node(5))
);

interface INode {
  value: number;
}

// https://www.codewars.com/kata/52bef5e3588c56132c0003bc/train/javascript
