function inter(s1, s2) {
  return new Set([...s1].filter((el) => s2.has(el)));
}

let A = new Set([1, 2]);
let B = new Set([2, 3]);

console.log(inter(A, B));
