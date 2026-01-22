function areaCode(text) {
  return text.match(/\(([^)]+)\)/)[1]
}

console.log(areaCode("The supplier's phone number is (555) 867-5309"))
