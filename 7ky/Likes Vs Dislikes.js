function likeOrDislike(buttons) {
  let state = 'Nothing'

  buttons.forEach(
    (element) => (state = element === state ? 'Nothing' : element)
  )

  return state
}

console.log(
  likeOrDislike([
    'Like',
    'Like',
    'Dislike',
    'Like',
    'Like',
    'Like',
    'Like',
    'Dislike',
  ])
)
