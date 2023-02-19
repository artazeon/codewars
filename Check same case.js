function sameCase(a, b){
  if (!/^[A-Za-z]$/.test(a) || !/^[A-Za-z]$/.test(b)) {
    console.log('Там не буквы')
    return  -1
  }
  else {
    const upA = a.toUpperCase()
    const upB = b.toUpperCase()

      if ((a === upA) == (b === upB) ){
        console.log('Одинаковые регистры')
        return 1
      }
      else {
        console.log('Разные регистры')
        return 0
      }
  }

}


sameCase('Z',1)