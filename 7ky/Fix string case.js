function solve(s){
  let lowerCase = 0
  let upperCase = 0

  for (let i=0; i<s.length; i++) {
    if (s[i]===s[i].toUpperCase()) {
      upperCase++
    }

    else {
      lowerCase++
    }
  }



  return upperCase > lowerCase ? s.toUpperCase() : s.toLowerCase()
}

console.log(solve("CODe"))
