function letterCheck(arr) {
  const [arr1, arr2] = arr.map((str) => str.split(''))
  return arr2.every(
    (el) => arr1.includes(el.toLowerCase()) || arr1.includes(el.toUpperCase()),
  )
}

console.log(letterCheck(['compadres', 'DRAPES']))
