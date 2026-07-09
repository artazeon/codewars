const removeNoise = (s) => s.replace(/[%\$\&\/#·@|º\\ª]/g, '')

console.log(removeNoise('h%e&·%$·llo w&%or&$l·$%d'))
