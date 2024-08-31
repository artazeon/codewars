//Язык программировагия - JavaScript

function triangle(a, b, c) {
  const sidesArr = [a, b, c]
  const sortSides = sidesArr.sort((a, b) => a - b)
  const result =
    Math.pow(sortSides[0], 2) + Math.pow(sortSides[1], 2) ===
    Math.pow(sortSides[2], 2)

  return result
}

// или

// const triangle = (a, b, c) => {
//   const [x, y, z] = [a, b, c].sort((a, b) => a - b)
//   return x ** 2 + y ** 2 === z ** 2
// }

console.log(triangle(3, 4, 5))
console.log(triangle(3, 7, 2))
console.log(triangle(5, 5, 5))
console.log(triangle(6, 8, 10))
