function getSocks(name, socks) {
  if (name === 'Punky') {
    const first = socks[0]

    const second = socks.find((sock) => sock !== first)

    return second ? [first, second] : []
  }

  const seen = new Set()

  for (const sock of socks) {
    if (seen.has(sock)) {
      return [sock, sock]
    }

    seen.add(sock)
  }

  return []
}
console.log(getSocks('Punky', ['blue', 'blue', 'blue', 'green', 'pink']))
