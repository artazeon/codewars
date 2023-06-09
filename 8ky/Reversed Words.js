function reverseWords(str){
  const arr = str.split(' ')
  const revArr = arr.reverse()
  const revStr = revArr.join(' ')
  return revStr;
}


console.log(reverseWords("yoda doesn't speak like this" ))