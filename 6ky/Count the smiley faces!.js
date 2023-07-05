function countSmileys(arr) {
  const regex = /^[:;][-~]?[)D]$/;
  return arr.filter((item) => regex.test(item)).length
}

console.log(countSmileys([":o(" , ":~>" , ";o)" , ":D" , ";>" , ":D" , ":-("]))

console.log(countSmileys([':-)', ';~D', ':-D', ':_D']))
