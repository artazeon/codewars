function solution(string) {
  const arr = []

  for (let i = 0; i < string.length; i++) {
    if (string.charAt(i) === string.charAt(i).toUpperCase()) {
      arr.push(` ${string.charAt(i)}`)
    } else {
      arr.push(`${string.charAt(i)}`)
    }
  }
  return arr.join('')
}
console.log(solution('camelCasing'))
console.log(solution('camelCasingTest'))
