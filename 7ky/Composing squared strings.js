function compose(s1, s2) {
  const arr1 = s1.split('\n')
  const arr2 = s2.split('\n').reverse()

  const res = arr1.map((el, ind) => {
    return el.slice(0, ind + 1) + arr2[ind].slice(0, el.length - ind)
  })

  return res.join('\n')
}

console.log(compose('abcd\nefgh\nijkl\nmnop', 'qrst\nuvwx\nyz12\n3456'))
