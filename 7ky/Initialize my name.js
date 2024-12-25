const initializeNames = (name) =>
  name
    .split(' ')
    .map((el, ind, arr) =>
      ind === 0 || ind === arr.length - 1 ? el : `${el[0]}.`
    )
    .join(' ')

console.log(initializeNames('Alice Betty Catherine Davis'))
