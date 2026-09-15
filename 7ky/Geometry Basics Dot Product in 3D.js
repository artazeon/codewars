class Vector {
  constructor(x, y, z) {
    this.x = x
    this.y = y
    this.z = z
  }
}

function dotProduct(v1, v2) {
  return v1.x * v2.x + v1.y * v2.y + v1.z * v2.z
}
console.log(dotProduct(new Vector(2, 0, -1), new Vector(0, -2, 1)))
