function invertHash(hash) {
  const result = {}

  for (const key in hash) {
    result[hash[key]] = key
  }

  return result
}
