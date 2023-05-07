function abbrevName(name){

  let words = name.split(" ");
  console.log(words)
  let initials = words.map(word => word.charAt(0).toUpperCase());
  console.log(initials)
  return initials.join(".");

}

console.log(abbrevName("Patrick Feenan"))