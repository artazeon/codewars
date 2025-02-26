var filterLucky = (x) => {
  return x.filter((el) => el.toString().includes('7'))
}

console.log(filterLucky([1, 2, 3, 4, 5, 6, 7, 68, 69, 70, 15, 17]))
