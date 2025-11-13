function anyOdd(x) {
  const binary = x.toString(2).split("").reverse().join("");
  for (let i = 0; i < binary.length; i++) {
    if (i % 2 === 1 && binary[i] === "1") {
      return 1;
    }
  }
  return 0;
}

console.log(anyOdd(2863311530), 1);
console.log(anyOdd(85), 0);
