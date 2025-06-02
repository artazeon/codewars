function Adam(rest) {
  return rest ? `Adam ${rest}` : 'Adam.'
}

function has(rest) {
  return `has ${rest}`
}

function a(rest) {
  return `a ${rest}`
}

function dog(rest) {
  return rest ? `dog ${rest}` : 'dog.'
}

function The(rest) {
  return `The ${rest}`
}

function name(rest) {
  return `name ${rest}`
}

function of(rest) {
  return `of ${rest}`
}

function the(rest) {
  return `the ${rest}`
}

function is(rest) {
  return `is ${rest}`
}

function also(rest) {
  return `also ${rest}`
}
console.log(Adam(has(a(dog()))))
console.log(The(name(of(the(dog(is(also(Adam()))))))))
