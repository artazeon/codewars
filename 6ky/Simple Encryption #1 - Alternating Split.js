function encrypt(text, n) {
  if (!text || n <= 0) return text

  let arr = text.split('')

  for (let i = 0; i < n; i++) {
    let arr1 = []
    let arr2 = []

    arr.forEach((el, ind) => {
      if (ind % 2 != 0) {
        arr1.push(el)
      } else {
        arr2.push(el)
      }

      arr = arr1.concat(arr2)
    })
  }

  return arr.join('')
}

function decrypt(encryptedText, n) {
  if (!encryptedText || n <= 0) return encryptedText

  const part = Math.floor(encryptedText.length / 2)

  for (let i = 0; i < n; i++) {
    let arr1 = encryptedText.slice(0, part).split('')
    let arr2 = encryptedText.slice(part).split('')
    const res = []

    for (let j = 0; j < arr2.length; j++) {
      res.push(arr2[j])
      if (arr1[j]) {
        res.push(arr1[j])
      }
      encryptedText = res.join('')
    }
  }
  return encryptedText
}

console.log(encrypt('012345', 1))
console.log(encrypt('012345', 2))
console.log(decrypt('135024', 1))
console.log(decrypt('304152', 2))
