function isPalindrome(x) {
  const y = x.split('').reverse().join('').toLowerCase()
  
  return x.toLowerCase() === y
}

console.log(isPalindrome("Madam"))