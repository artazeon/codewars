function arraySum(arr) {
  return arr.flat(Infinity).reduce((acc, el) => {
    if (typeof el === "number") {
      return acc + el;
    }
    return acc;
  }, 0);
}

console.log(arraySum([1, 2, [1, 2]]));
