
function array(string) {
  const arr = string.split(',')

  if (arr.length >= 3) {
    
    arr.pop() && arr.shift()
    string = arr.join (' ')
    return string

  }

  else {
    return null
  }

}


console.log(array(''))