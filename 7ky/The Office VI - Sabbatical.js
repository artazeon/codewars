function sabb(s, val, happiness) {
  let count = 0
  s.split('').forEach((el) => 'sabbatical'.includes(el) && count++)
  return count + val + happiness > 22
    ? 'Sabbatical! Boom!'
    : 'Back to your desk, boy.'
}

console.log(sabb('Can I have a sabbatical?', 5, 5))
console.log(sabb('Why are you shouting?', 7, 2))
