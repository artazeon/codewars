let employees = [
  { firstName: 'Morty', lastName: 'Smith', role: 'Truck Driver' },
]

function findEmployeesRole(name) {
  const nameArr = name.split(' ')
  const worker = employees.filter(
    (el) => el['firstName'] === nameArr[0] && el['lastName'] === nameArr[1]
  )

  return worker.length ? worker[0]['role'] : 'Does not work here!'
}

console.log(findEmployeesRole('Dipper Pines'))
console.log(findEmployeesRole('Morty Smith'))
