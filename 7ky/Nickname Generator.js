function nicknameGenerator(name) {
  
  const vowels = ['a', 'e', 'i', 'o', 'u']

  if (name.length <= 3) return `Error: Name too short`
  if (vowels.includes(name[2])) return name.slice(0, 4)
  
  return name.slice(0, 3)
}

console.log(nicknameGenerator('Robert'))
console.log(nicknameGenerator('Robert'))
console.log(nicknameGenerator('R'))
