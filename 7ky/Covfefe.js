function covfefe(str) {
  return str.includes('coverage')
    ? str.replace(/coverage/gi, 'covfefe')
    : str + ' covfefe'
}

console.log(covfefe('coverage coverage'))
console.log(covfefe('nothing'))
