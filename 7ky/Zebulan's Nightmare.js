function zebulansNightmare(functionName) {
  const arr = functionName
    .split('_')
    .map((el, ind) => (ind === 0 ? el : el[0].toUpperCase() + el.slice(1)))
  return arr.join('')
}

console.log(zebulansNightmare('camel_case'))
