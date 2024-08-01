function animal(obj) {
  return `This ${obj.color} ${obj.name} has ${obj.legs} legs.`
}

console.log(animal({ name: 'dog', legs: 4, color: 'white' }))
;("'This white dog has 4 legs.'")
;("'This white dog dog has 4 legs.'")
