function randomCase(x) {
  return x
    .split("")
    .map((el) =>
      Math.round(Math.random()) ? el.toUpperCase() : el.toLowerCase()
    )
    .join("")
}

console.log(
  randomCase("Lorem ipsum dolor sit amet, consectetur adipiscing elit")
)
