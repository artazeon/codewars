function divCon(x) {
  return x.reduce((accum, el) => {
    return typeof(el) == 'string' ? accum - el : accum + +el
  }, 0)
}

console.log(divCon([9, 3, '7', '3']))

// Учитывая смешанный массив числовых и строковых представлений целых чисел, сложите нестроковые целые числа и вычтите сумму строковых целых чисел
