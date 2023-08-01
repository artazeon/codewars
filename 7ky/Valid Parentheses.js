function validParentheses(parenStr) {
  let find = /\(\w*\)/g

  while (parenStr.match(find)) {
    parenStr = parenStr.replace(find, '')
  }

  return parenStr.length ? false : true
}

console.log(validParentheses(')()(())((()))(())()'))
console.log(validParentheses('(()())()'))
