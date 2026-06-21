function tapCodeTranslation(text) {
  const polybius = {
    a: [1, 1],
    b: [1, 2],
    c: [1, 3],
    k: [1, 3],
    d: [1, 4],
    e: [1, 5],
    f: [2, 1],
    g: [2, 2],
    h: [2, 3],
    i: [2, 4],
    j: [2, 5],
    l: [3, 1],
    m: [3, 2],
    n: [3, 3],
    o: [3, 4],
    p: [3, 5],
    q: [4, 1],
    r: [4, 2],
    s: [4, 3],
    t: [4, 4],
    u: [4, 5],
    v: [5, 1],
    w: [5, 2],
    x: [5, 3],
    y: [5, 4],
    z: [5, 5],
  }

  let result = []

  for (let i = 0; i < text.length; i++) {
    const row = polybius[text[i]][0]
    const col = polybius[text[i]][1]
    result.push('.'.repeat(row))
    result.push('.'.repeat(col))
  }

  return result.join(' ')
}

console.log(
  tapCodeTranslation('test'),
  '.... .... . ..... .... ... .... ....',
  `Text: "test"`,
)
