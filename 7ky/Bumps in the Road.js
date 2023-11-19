function bump(x){
  let count = 0

  for (let i=0; i <= x.length; i++) {
    if (x[i] == 'n') {
      count++
    }
  }

  return count > 15 ? "Car Dead" : "Woohoo!"
}


console.log(bump("nnn_n__n_n___nnnnn___n__nnn__"))
console.log(bump("_nnnnnnn_n__n______nn__nn_nnn"))


// "Woohoo!"
// "Car Dead"