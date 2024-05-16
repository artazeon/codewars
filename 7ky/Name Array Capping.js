function capMe(names) {
  return names.map(
    (el) => el.charAt(0).toUpperCase() + el.slice(1).toLowerCase()
  )
}

console.log(capMe(['jo', 'nelson', 'jurie']))
