function quicksum(packet) {
  let result = 0

  for (let i = 0; i < packet.length; i++) {
    const char = packet[i]

    if (char !== ' ' && (char < 'A' || char > 'Z')) {
      return 0
    }

    const letter = char === ' ' ? 0 : char.charCodeAt(0) - 64
    result += letter * (i + 1)
  }

  return result
}

console.log(quicksum('ACM'))
console.log(quicksum('axg '))
console.log(quicksum('A C M'))
