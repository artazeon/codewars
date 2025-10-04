function isolateIt(arr) {
  return arr.map((el) => {
    const mid = Math.floor(el.length / 2)

    return el.length % 2 === 0
      ? el.slice(0, mid) + '|' + el.slice(mid)
      : el.slice(0, mid) + '|' + el.slice(mid + 1)
  })
}

console.log(isolateIt(['abcd', 'efgh']))
console.log(isolateIt(['abcde', 'fghij']))
