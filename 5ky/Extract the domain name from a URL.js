function domainName(url) {
  const regex = /^(https?:\/\/www.|https?:\/\/|www\.)/
  const withoutProt = url.replace(regex, '')
  const parts = withoutProt.split('.')
  return parts[0]
}

console.log(domainName('http://google.com'))
console.log(domainName('https://google.com'))
console.log(domainName('www.google.com'))
console.log(domainName('http://www.codewars.com/kata/'))
