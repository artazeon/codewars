function solution(str){
  const myArr = str.split('')
  const myArrReverse = myArr.reverse()
  const newStr = myArrReverse.join('')
  return newStr
}

console.log(solution('artazeon'))
