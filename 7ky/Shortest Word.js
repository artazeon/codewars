function findShort(s){
  const sortArr = s.split(' ').sort((a,b)=> a.length-b.length)
  return sortArr[0].length
}


console.log(findShort("bitcoin take over the world maybe who knows perhaps"))
