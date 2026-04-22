var Foo = function (value) {
  this.val = value
  return this.val
}

Foo.prototype.valueOf = function () {
  return this.val
}

console.log(new Foo(2) + new Foo(3), 5)
