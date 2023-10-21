export const ArrayMyFlatPolyfill = () => {
  // eslint-disable-next-line no-extend-native
  Array.prototype.myFlat = function (depth = 1) {
    let result = [...this];
    for (let d = 0; d < depth; d++) {
      let multiDimension = false;
      result = result.reduce((acc, current) => {
        if (Array.isArray(current)) multiDimension = true;
        return acc.concat(current);
      }, []);
      if (!multiDimension) break;
    }
    return result;
  };

  const arrTwoLvl = [1, 2, [2], [4, 5], 6, 8, 7];
  const arrMulLvl = [1, 2, [2], [4, [5, 6, [[8]]], 7]];

  console.log("arrTwoLvl.myFlat() = ", arrTwoLvl.myFlat());
  console.log("arrTwoLvl.flat()   = ", arrTwoLvl.flat());
  console.log("arrMulLvl.myFlat() = ", arrMulLvl.myFlat());
  console.log("arrMulLvl.flat()   = ", arrMulLvl.flat());
  console.log();
  console.log("arrTwoLvl.myFlat(Infinity) = ", arrTwoLvl.myFlat(Infinity));
  console.log("arrMulLvl.myFlat(Infinity) = ", arrMulLvl.myFlat(Infinity));
};
