function removeUrlAnchor(url){
  const hash = url.indexOf("#")
  return hash === -1 ? url: url.substring(0, hash)
  
}

console.log(removeUrlAnchor('www.codewars.com#about'))
console.log(removeUrlAnchor('www.codewars.com/katas/'))
