function count(string) {
  let count = {
 
  }


  for (let i = 0; i < string.length; i++) {
    if (count[string[i]]) {
      count[string[i]]++;
    } else {
      count[string[i]] = 1;
    }
  }


  return count;
}
console.log(count('aba'))
