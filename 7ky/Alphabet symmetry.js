function solve(arr){  
  const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

  const res = arr.map(el => {
    let count = 0
    el = el.toLowerCase()
    
    for (let i = 0; i <= el.length; i++) {
      if (el[i] === alphabet[i]) {
        count++
      }
    }

    return count
  })

  return res
  };



console.log(solve(["abode","ABc","xyzD"]))
