function top3(products, amounts, prices) {
  const data = products.map((name, i) => ({
    name,
    total: amounts[i] * prices[i],
  }))

  data.sort((a, b) => b.total - a.total)

  const result = data.map((item) => item.name)

  return result.slice(0, 3)
}

console.log(
  top3(
    ['Computer', 'Cell Phones', 'Vacuum Cleaner'],
    [3, 24, 8],
    [199, 299, 399],
  ),
  ['Cell Phones', 'Vacuum Cleaner', 'Computer'],
)
