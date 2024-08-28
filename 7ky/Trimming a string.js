function trim(str, size) {
  let length = 0
  if (size <= 3) {
    length = str.length
  } else {
    length = str.length + 3
  }
  if (str.length <= size) {
    return str
  }
  if (size <= 3 && length > size) {
    const newStr = str.slice(0, size)
    return newStr + '...'
  }

  if (size <= 3) {
    const newStr = str.slice(0, size)
    return newStr
  }

  if (length > size) {
    const newStr = str.slice(0, size - 3)
    return newStr + '...'
  }
}
console.log(trim('Creating kata is fun', 14))
console.log(trim('He', 1))
console.log(trim('Hey', 3))
console.log(trim('Coding rocks', 12))
console.log(trim('Code Wars is pretty rad', 50))
// Создайте функцию, которая обрезает строку (первый аргумент), если она длиннее запрошенной максимальной длины строки (второй аргумент). Результат также должен заканчиваться на "..." Эти точки на конце также увеличивают длину строки.
// Например, trim("Creating kata is fun", 14)следует вернуть"Creating ka..."
// Если длина строки меньше или равна максимальной длине строки, то просто верните строку без обрезки или точек.
// например, trim("Code Wars is pretty rad", 50)следует вернуть"Code Wars is pretty rad"
// Если запрошенная длина строки меньше или равна 3 символам, то длина точек не добавляется к длине строки.
// например, trim("He", 1)должно вернуться "H...", потому что 1 <= 3
// Запрошенная максимальная длина будет больше 0. Входная строка не будет пустой.
