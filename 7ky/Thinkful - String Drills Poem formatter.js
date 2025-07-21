function formatPoem(poem) {
  return poem.split('.').join('.\n')
}

console.log(
  formatPoem(
    'Beautiful is better than ugly. Explicit is better than implicit. Simple is better than complex. Complex is better than complicated.'
  )
)
