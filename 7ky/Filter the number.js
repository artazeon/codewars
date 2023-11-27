var filterString = function(value) {
 return +value.replace(/[a-z]/g, "")
}

console.log(filterString("aa1bb2cc3dd"))
