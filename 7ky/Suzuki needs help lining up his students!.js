function lineupStudents(students) {
  const arr = students.split(' ')

  const sortedArr = arr.sort((a, b) => {
    const lengthD = b.length - a.length

    if (lengthD === 0) {
      return b.localeCompare(a)
    }

    return lengthD
  })
  return sortedArr
}

console.log(
  lineupStudents(
    'Tadashi Takahiro Takao Takashi Takayuki Takehiko Takeo Takeshi Takeshi'
  )
)
lst = [
  'Takehiko',
  'Takayuki',
  'Takahiro',
  'Takeshi',
  'Takeshi',
  'Takashi',
  'Tadashi',
  'Takeo',
  'Takao',
]

console.log(lst)
