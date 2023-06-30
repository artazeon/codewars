function toCamelCase(str){
  const arr = str.replace(/[-_]/g, " ").split(' ')
  const newArr = arr.map((i, index)=> {
    if (index === 0) {
      return i
    }
    else {return i.charAt(0).toUpperCase() + i.slice(1);}
    
  });
  return newArr.join('')

}

console.log(toCamelCase("the_stealth_warrior"))
console.log(toCamelCase('A-B-C'))
