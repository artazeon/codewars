function wordsToMarks(string) {
  const arrString = string.split('')
  const alphabet = [0,'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
  const summ = arrString.reduce((ac, el, ind) => {
    return ac + alphabet.indexOf(el)
  }, 0)

  return summ
}

console.log(wordsToMarks('attitude'))
