const numObj = (s) => s.map((el) => ({ [el]: String.fromCharCode(el) }))

console.log(numObj([101, 121, 110, 113, 113, 103]))
