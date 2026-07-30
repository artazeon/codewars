var typeOfTriangle = function (sideA, sideB, sideC) {
  if (
    sideA + sideB <= sideC ||
    sideA + sideC <= sideB ||
    sideB + sideC <= sideA
  ) {
    return 'Not a valid triangle'
  }

  if (sideA === sideB && sideB === sideC) {
    return 'Equilateral'
  }

  if (sideA === sideB || sideA === sideC || sideB === sideC) {
    return 'Isosceles'
  }

  return 'Scalene'
}

console.log(typeOfTriangle(3, 2, 4))
