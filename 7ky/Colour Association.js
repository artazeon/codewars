function colourAssociation(array) {
  const resObject = array.map((el) => {
    return { [el[0]]: el[1] }
  })

  return resObject
}

console.log(
  colourAssociation([
    ['white', 'goodness'],
    ['blue', 'tranquility'],
  ])
)
