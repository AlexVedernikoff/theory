import { labelsArray } from "./8Queens/constants";

// export function calculateQueenAttack(qri, qci) {
//   return labelsArray
//     .reduce((acc: number[][], _, i) => {
//       acc.push(
//         [qri - i, qci - i],
//         [qri - i, qci + i],
//         [qri + i, qci - i],
//         [qri + i, qci + i],
//         [qri, i],
//         [i, qci]
//       );
//       return acc;
//     }, [])
//     .filter(
//       ([r, c]) => labelsArray[r] && labelsArray[c] && r !== qri && c !== qci
//     );
// }

export function modifyMatrix(qri, qci) {
  const row = (row: number) => labelsArray.map((cell) => `${cell}${row}`);
  const board = () => labelsArray.map((_, i) => row(8 - i));
  const matrix = board();
  matrix[qri][qci] = "QN";
  const diagonals: number[][] = labelsArray
    .reduce((acc: number[][], _, i) => {
      acc.push(
        [qri - i, qci - i],
        [qri - i, qci + i],
        [qri + i, qci - i],
        [qri + i, qci + i],
        [qri, i],
        [i, qci]
      );
      return acc;
    }, [])
    .filter(
      ([r, c]) =>
        labelsArray[r] && labelsArray[c] && (r === qri && c === qci) === false
    );
  diagonals.forEach(([r, c]) => {
    matrix[r][c] = "AT";
  });
  console.log(matrix);
}

// calculateArrayOfQueensAttack([
//   [0, 0],
//   [1, 2],
// ]);
