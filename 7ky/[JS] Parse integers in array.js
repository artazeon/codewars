var parseNumbers = function (intStrs) {
  return intStrs.map((el) => parseInt(el))
}

console.log(parseNumbers([]), [])
console.log(parseNumbers(['13']), [13])
console.log(parseNumbers(['2.48']), [2])
