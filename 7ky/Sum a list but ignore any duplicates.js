function sumNoDuplicates(numList) {
  const sum = numList.reduce(
    (acc, el) =>
      numList.indexOf(el) === numList.lastIndexOf(el) ? acc + el : acc,
    0
  )

  return sum
}

console.log(sumNoDuplicates([3, 4, 3, 6]))
