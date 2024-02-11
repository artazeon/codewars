class Block {
  constructor(data) {
    this.width = data[0]
    this.length = data[1]
    this.height = data[2]
  }

  getWidth() {
    return this.width
  }
  getLength() {
    return this.length
  }
  getHeight() {
    return this.height
  }
  getVolume() {
    return this.width * this.length * this.height
  }
  getSurfaceArea() {
    return (
      2 *
      (this.width * this.length +
        this.width * this.height +
        this.length * this.height)
    )
  }
}
let block = new Block([2, 4, 6])

console.log(block)

console.log(block.getWidth())
console.log(block.getLength())
console.log(block.getHeight())
console.log(block.getVolume())
console.log(block.getSurfaceArea())
