const divisibleByThree = (str) =>
  str.split('').reduce((acc, el) => acc + +el, 0) % 3 === 0

console.log(divisibleByThree('123'))
