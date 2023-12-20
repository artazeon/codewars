function solution(pairs){
  let str = ''
  for (let prop in pairs) {
    str += `${prop} = ${pairs[prop]},`
  }

  return str.slice(0, -1)
}

console.log(solution({a: 1, b: '2'}))
// should return "a = 1,b = 2"
