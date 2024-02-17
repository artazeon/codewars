function getMissingElement(superImportantArray) {
  for (i = 0; i <= 9; i++) {
    if (!superImportantArray.includes(i)) return i
  }
}

console.log(getMissingElement([0, 5, 1, 3, 2, 9, 7, 6, 4]))
