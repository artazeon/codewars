const orderedCount = function (text) {
  const arr = [];

  for (let i of text) {
    const curEl = arr.find(el => el[0] === i);
    if (curEl) {
      curEl[1]++;
    } else {
      arr.push([i, 1]);
    }
  }

  return arr;
}

console.log(orderedCount('abracadabra'))
console.log(orderedCount('233312'))
