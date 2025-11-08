function testit(s) {
  return s
    .split(" ")
    .map((word) =>
      word.length ? word.slice(0, -1) + word.slice(-1).toUpperCase() : word
    )
    .join(" ");
}

console.log(testit(""), "", "");
console.log(testit("a"), "A", "");
console.log(testit("b"), "B", "");
console.log(testit("a a"), "A A", "");
console.log(testit("a b"), "A B", "");
console.log(testit("a b c"), "A B C", "");
console.log(testit("'P H wltvG'"), "'P H WLTVG'");
console.log(testit("'aB aB'"), "'AB AB'");
console.log(testit("'aA'"), "'AA'");
