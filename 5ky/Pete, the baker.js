function cakes(recipe, available) {
  const result = []
  for (let prop in recipe) {
    let temp = Math.floor(available[prop] / recipe[prop])
    if (temp) {
      result.push(temp)
    } else {
      result.push(0)
    }
  }

  return Math.min(...result)
}

// let recipe = { flour: 500, sugar: 200, eggs: 1 }
// let available = { flour: 1200, sugar: 1200, eggs: 5, milk: 200 }

let recipe = { apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100 }
let available = { sugar: 500, flour: 2000, milk: 2000 }

console.log(cakes(recipe, available))
