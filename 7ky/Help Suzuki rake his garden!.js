function rakeGarden(garden) {
  const clearGarden = garden
    .split(' ')
    .map((el) => (el != 'gravel' && el != 'rock' ? 'gravel' : el))
  return clearGarden.join(' ')
}
console.log(
  rakeGarden(
    'slug spider rock gravel gravel gravel gravel gravel gravel gravel'
  )
)
