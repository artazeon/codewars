function borrow(s) {
  return s.toLowerCase().replace(/[^a-z]/gi, '')
}

console.log(borrow('WhAt! FiCK! DaMn CAke?'))
