function likes(names) {
  return names.length === 0
    ? 'no one likes this'
    : names.length === 1
    ? `${names[0]} likes this`
    : names.length === 2
    ? `${names[0]} and ${names[1]} like this`
    : names.length === 3
    ? `${names[0]}, ${names[1]} and ${names[2]} like this`
    : `${names[0]}, ${names[1]} and ${names.length - 2} others like this`
}

console.log(likes([]))
console.log(likes(['Peter']))
console.log(likes(['Jacob', 'Alex']))
console.log(likes(['Max', 'John', 'Mark']))
console.log(likes(['Alex', 'Jacob', 'Mark', 'Max']))
