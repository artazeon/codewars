// write the function isAnagram
var isAnagram = function(test, original) {
  const or = original.toLowerCase().split('').sort().join('')
  const ts = test.toLowerCase().split('').sort().join('')

  return or == ts 
};


console.log(isAnagram("eeffoT", "toffee"))