function inviteMoreWomen(L) {
  const res = L.reduce((acc, el) => acc + el, 0)
  return res > 0
}

console.log(inviteMoreWomen([1, -1, 1]))
console.log(inviteMoreWomen([1, 1, 1]))
