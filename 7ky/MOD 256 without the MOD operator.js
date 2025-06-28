function mod256WithoutMod(number) {
  let absNumber = Math.abs(number)
  for (let i = 0; absNumber >= 256; i++) {
    absNumber = absNumber - 256
  }
  return number < 0 ? -absNumber : absNumber
}

console.log(mod256WithoutMod(254))
console.log(mod256WithoutMod(256))
console.log(mod256WithoutMod(258))
console.log(mod256WithoutMod(-254))
console.log(mod256WithoutMod(-256))
console.log(mod256WithoutMod(-258))
