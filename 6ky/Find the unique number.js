function findUniq(arr) {
  const uniq = arr.filter((item) => {
    return arr.indexOf(item) === arr.lastIndexOf(item);
  });
  return uniq[0];
}


console.log(findUniq([ 1, 0, 0 ]))
console.log(findUniq([ 0, 1, 0 ]))
console.log(findUniq([1, 1, 1, 2, 1, 1]))
console.log(findUniq([3, 10, 3, 3, 3]))
console.log(findUniq([7, 7, 7, 7, 7, 7, 6, 7]))
console.log(findUniq([7, 7, 7, 7, 7, 7, 10, 7]))
