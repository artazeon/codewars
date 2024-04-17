function jumpingNumber(n) {
  const arr = n.toString().split('')

  for (let i = 0; i < arr.length; i++) {
    if (+arr[i] + 1 < arr[i + 1] || +arr[i] - 1 > arr[i + 1]) {
      return 'Not'
    }
  }

  return 'Jumping!!'
}

console.log(jumpingNumber(4343456))
console.log(jumpingNumber(79))
