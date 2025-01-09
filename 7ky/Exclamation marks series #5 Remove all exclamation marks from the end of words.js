function remove(string) {
  return string.replace(/(\w+)!+/g, '$1')
}

console.log(remove('!!!Hi !!hi!!! !hi'))
