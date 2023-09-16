function longest(s1, s2) {
  const arr = [...s1.split(''), ...s2.split('')].sort()
  const res = arr.filter((el, ind) => {
    return el != arr[ind-1]
  })
 


  
  return res.join('')
}

console.log(longest("aretheyhere", "yestheyarehere"))
