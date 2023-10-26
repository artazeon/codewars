function inAscOrder(arr) {
  

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      return false;
    }
  }
  return true;
}

console.log(inAscOrder([1, 2, 4, 7, 19]))
console.log(inAscOrder([9, 8, 7, 6, 5, 4, 3, 2, 1]))
