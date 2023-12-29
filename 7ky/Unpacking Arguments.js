function spread(func, args) {
  return func(...args)
}

console.log(spread(someFunction, [1, true, "Foo", "bar"]))



