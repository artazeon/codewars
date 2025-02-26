var sing = function () {
  let result = []
  const b = ' bottle'
  const bw = ' of beer on the wall'

  for (let i = 99; i > 0; i--) {
    result.push(
      `${i}${b}${i === 1 ? '' : 's'}${bw}, ${i} bottle${
        i === 1 ? '' : 's'
      } of beer.`
    )
    result.push(
      `Take one down and pass it around, ${
        i - 1 === 0 ? 'no more' : i - 1
      } bottle${i - 1 === 1 ? '' : 's'}${bw}.`
    )
  }

  result.push(`No more ${b}s${bw}, no more bottles of beer.`)
  result.push(`Go to the store and buy some more, 99${b}s${bw}.`)

  return result
}

let song = sing()

console.log(song[0])
console.log(song[1])
console.log(song[2])
console.log(song[199])

//'Go to the store and buy some more, 99  bottles of beer on the wall.
// Go to the store and buy some more, 99 bottles of beer on the wall.'
