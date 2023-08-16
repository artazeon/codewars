String.prototype.camelCase = function() {
  const arr = this.split(' ')
  const newArr = arr.map(el => el.charAt(0).toUpperCase() + el.slice(1))
  return newArr.join('')
}


console.log(('hello case').camelCase());
