// Задача: заменить уникальные символы в строке на "(", а не уникальные на ")"
export const duplicateEncodeReact = () => {
  // **************************************
  function duplicateEncode(word: string) {
    let result: string[] = [];
    const wordLowerCased = word.toLowerCase();
    const map = new Map();
    for (let key of wordLowerCased) {
      !map.get(key) ? map.set(key, 1) : map.set(key, map.get(key) + 1);
    }
    for (let letter of wordLowerCased) {
      map.get(letter) === 1 ? result.push("(") : result.push(")");
    }
    return result.join("");
  }
  console.log(duplicateEncode("din"));
  // **********************************************
  function duplicateEncodeVer20(word: string) {
    return word
      .toLowerCase()
      .split("")
      .map((char, _, arr) =>
        arr.indexOf(char) === arr.lastIndexOf(char) ? "(" : ")"
      )
      .join("");
  }
  console.log(duplicateEncodeVer20("Success"));
  // **********************************************
};

// https://www.codewars.com/kata/54b42f9314d9229fd6000d9c/train/javascript
