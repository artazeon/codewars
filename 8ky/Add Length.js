function addLength(str) {
  return str.split(' ').map(elem => elem + " " + elem.length)
  }
  

console.log(addLength('you will win'))
