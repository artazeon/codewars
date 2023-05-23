function testEven(n) {
  return Number.isInteger(n / 2) 
}

console.log( testEven(0.5) )
console.log( testEven(1) )
console.log( testEven(1.1) )
console.log( testEven(2) )