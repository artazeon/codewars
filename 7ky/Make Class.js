function makeClass(...properties) {
  return class {
    constructor(...values) {
      properties.forEach((prop, index) => {
        this[prop] = values[index];
      });
    }
  };
}

const Animal = makeClass("name", "species", "age", "health", "weight", "color");

const dog = new Animal("Бобик", "собака", 3, "здоров", 20, "белый");
console.log(dog);
console.log(dog.name);
console.log(dog.species);
console.log(dog.age);
console.log(dog.health);
console.log(dog.weight);
console.log(dog.color);
