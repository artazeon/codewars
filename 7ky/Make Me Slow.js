function makeMeSlow() {
  const start = Date.now()
  while (Date.now() - start < 7000) {}
}

console.log(makeMeSlow())
