function shiftLeft(a, b) {
  let i = 0;
  while (i < a.length && i < b.length) {
    if (a[a.length - 1 - i] !== b[b.length - 1 - i]) break;
    i++;
  }

  return a.length - i + (b.length - i);
}

console.log(shiftLeft("test", "west"));
console.log(shiftLeft("test", "yes"));
