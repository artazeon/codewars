function tailSwap(arr) {
  let [firstBefore, firstAfter] = arr[0].split(':')
  let [secondBefore, secondAfter] = arr[1].split(':')
  return [`${firstBefore}:${secondAfter}`, `${secondBefore}:${firstAfter}`]
}
console.log(tailSwap(['abc:123', 'cde:456']))
