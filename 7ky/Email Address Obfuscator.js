obfuscate = function (email) {
  return email.replace(/@/g, ' [at] ').replace(/\./g, ' [dot] ')
}
console.log(obfuscate('Code_warrior@foo.ac.uk'))
