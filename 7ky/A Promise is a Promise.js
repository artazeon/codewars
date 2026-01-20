function promiseHelloWorld() {
  return new Promise((resolve) => {
    resolve('Hello World!')
  })
}

const result = promiseHelloWorld()
console.log(result)
