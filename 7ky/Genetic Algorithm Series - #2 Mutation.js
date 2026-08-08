const mutate = (chromosome, p) => {
  let result = ''

  for (let i = 0; i < chromosome.length; i++) {
    const random = Math.random()
    console.log()

    if (random < p) {
      result += chromosome[i] === '0' ? '1' : '0'
    } else {
      result += chromosome[i]
    }
  }

  return result
}

const zero = Array(10).join('0')
const one = Array(10).join('1')

console.log(mutate(zero, 1), one)
console.log(mutate(one, 1), zero)
