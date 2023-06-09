function repeatStr (n, s) {
  let res = ''
  for (let i = 1; i <= n; i++){
    res += `${s}`
  }
  return res
}


console.log(repeatStr(3, "*"))