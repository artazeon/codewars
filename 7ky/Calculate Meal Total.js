function calculate_total(subtotal, tax, tip) {
  const taxAmount = (subtotal * tax) / 100
  const tipAmount = (subtotal * tip) / 100

  const total = subtotal + taxAmount + tipAmount

  return Number(total.toFixed(2))
}

console.log(calculate_total(5, 5, 10))
