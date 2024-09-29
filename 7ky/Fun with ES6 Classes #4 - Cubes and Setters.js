class Cube {
  constructor(length) {
    this.length = length
  }

  set surfaceArea(newsurfaceArea) {
    this.length = Math.sqrt(newsurfaceArea / 6)
  }

  set volume(newVolume) {
    this.length = Math.cbrt(newVolume)
  }

  get surfaceArea() {
    return 6 * Math.pow(this.length, 2)
  }

  get volume() {
    return Math.pow(this.length, 3)
  }
}

const cube = new Cube(2)
console.log(cube.surfaceArea)
console.log(cube.volume)
console.log(cube.length)
