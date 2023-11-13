function explode(s) {
  let result = ''
  for (let i = 0; i <= s.length - 1; i++) {
    let temp = ''
      for (let j = 0; j < s[i]; j++) {
        temp += s[i]
      }
      result += temp
  }

  return result
}

console.log(explode('312'))
console.log(explode('102222666666999999999'))


// function explode(s) {
//   let result = ''
//   for (let i = 0; i <= s.length - 1; i++) {
//     if (s[i] == 0) {
//       result += ''
//     } else {
//       let temp = ''
//       for (let j = 0; j < s[i]; j++) {
//         temp += s[i]
//       }
//       result += temp
//     }
//   }

//   return result
// }



// function explode(s) {
//   const arr = s.split('')

//   const newArr = arr.map((el) => {
//     let temp = ''
//     for (let i = 1; i <= el; i++) {
//       if (el == 0) {
//         temp += 'z'
//       } else {
//         temp += el
//       }
//     }

//     return temp
//   })

//   return newArr.join('')
// }
