const phrases = [
  'I love you',
  'a little',
  'a lot',
  'passionately',
  'madly',
  'not at all',
]

function howMuchILoveYou(n) {
  console.log((n-1) % phrases.length)
   return phrases[(n - 1) % phrases.length] 
}


console.log( howMuchILoveYou(322) )