function isTriangle(a, b, c) {
  return a < b + c && b < a + c && c < a + b 
}



console.log(isTriangle(2,2,1))
console.log(isTriangle(7,2,2))
