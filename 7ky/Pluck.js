const pluck = (objs, name) => objs.map((el) => el[name])

console.log(pluck([{ a: 1 }, { a: 2 }], 'a'))
console.log(pluck([{ a: 1, b: 3 }, { a: 2 }], 'b'))
