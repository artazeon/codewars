function sortArray(array) {
  const oddArr = array.filter((i) => i % 2 !== 0);
  oddArr.sort((a, b) => a - b);

  const eveArr = array.map((i) => {
    if (i % 2 !== 0) {
      return undefined;
    } else {
      return i;
    }
  });

  for (let i = 0; i < eveArr.length; i++) {
    if (eveArr[i] === undefined) {
      eveArr[i] = oddArr.shift();
    }
  }

  return eveArr;
}
console.log(sortArray([5, 3, 2, 8, 1, 4]))
console.log(sortArray([5, 1, 2, 8, 3, 3]))
