const sumNested = (arr) => arr.flat(Infinity).reduce((acc, el) => acc + el, 0)

console.log(sumNested([1, [1], [1, [1]], [1, [1], [1, [1]]]]))
