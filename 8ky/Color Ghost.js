class Ghost {
  constructor() {
    const colors = ['white', 'yellow', 'purple', 'red']
    const randomIndex = Math.floor(Math.random() * colors.length)
    this.color = colors[randomIndex]
  }
}

let colors = ['white', 'yellow', 'purple', 'red']

console.log(new Ghost().color)
