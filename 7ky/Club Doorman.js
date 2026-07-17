function passTheDoorMan(word) {
  for (let i = 0; i < word.length; i++) {
    if (word[i] === word[i + 1]) {
      return (word[i].charCodeAt(0) - 96) * 3
    }
  }
}
console.log(passTheDoorMan('lettuce', 60))
