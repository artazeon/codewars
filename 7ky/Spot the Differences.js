function spot(s1, s2) {
  const res = [...s1].reduce((acc, el, i) => {
    if (el !== s2[i]) acc.push(i)
    return acc
  }, [])

  return res
}

console.log(spot('abcdefg', 'abcqetg'))
