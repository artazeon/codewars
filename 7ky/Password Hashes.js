const crypto = require('crypto')

function passHash(str) {
  const hash = crypto.createHash('md5')
  hash.update(str)
  const hashedValue = hash.digest('hex')
  return hashedValue
}

console.log(passHash('password'))
