function decode(string) {
  const decMap = {
    '0': '5',
    '1': '9',
    '2': '8',
    '3': '7',
    '4': '6',
    '5': '0',
    '6': '4',
    '7': '3',
    '8': '2',
    '9': '1'
  };
  
  const encodedPhone = string.split('');
  const decodedPhone = encodedPhone.map(item => decMap[item])
  return decodedPhone.join('')
  
}