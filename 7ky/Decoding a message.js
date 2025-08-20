const decode = (message) =>
  message
    .split('')
    .map((el) => String.fromCharCode(el !== ' ' ? 219 - el.charCodeAt(0) : 32))
    .join('')

console.log(decode('a z'))
