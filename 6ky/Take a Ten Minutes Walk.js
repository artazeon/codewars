function isValidWalk(walk) {
  console.log(walk)
  let count = {
    n : 0,
    s : 0,
    e : 0,
    w : 0
  }

  for (let i = 0; i < walk.length; i++) {
    if (count[walk[i]]) {
      count[walk[i]]++;
    } else {
      count[walk[i]] = 1;
    }
  }
  console.log(count)
  return count.n === count.s && count.e === count.w && walk.length == 10
}
console.log(isValidWalk(['n','s','n','s','n','s','n','s','n','s']) )
console.log(isValidWalk(['w','e','w','e','w','e','w','e','w','e','w','e']) )
console.log(isValidWalk(['w']) )
console.log(isValidWalk(['n','n','n','s','n','s','n','s','n','s']) )
console.log(isValidWalk([ 'n' ]) )
console.log(isValidWalk([ 'n', 's' ]) )
