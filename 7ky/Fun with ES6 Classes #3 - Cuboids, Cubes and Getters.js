class Cuboid {
  constructor(length, width, height) {
    this.length = length
    this.width = width
    this.height = height
  }

  get surfaceArea() {
    return (
      2 *
      (this.length * this.width +
        this.width * this.height +
        this.length * this.height)
    )
  }
  get volume() {
    return this.length * this.width * this.height
  }
}
class Cube extends Cuboid {
  constructor(length) {
    super(length, length, length)
  }
}

const cuboid = new Cuboid(1, 2, 3)
console.log(cuboid.surfaceArea)
console.log(cuboid.volume)

const cube = new Cube(5)
console.log(cube.surfaceArea)
console.log(cube.volume)
