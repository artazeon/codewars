function inArray(array1,array2){
  const newArr = array1.filter(el => {
    return array2.join(',').includes(el)
  })
  .sort()

  return newArr
}


console.log(inArray(["xyz", "live", "strong"], ["lively", "alive", "harp", "sharp", "armstrong"] ))
console.log(inArray(["live", "strong", "arp"], ["lively", "alive", "harp", "sharp", "armstrong"] ))

