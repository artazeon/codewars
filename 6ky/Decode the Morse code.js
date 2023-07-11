decodeMorse = function(morseCode){
  const arrWord = morseCode.split(' ')
  const deArrWord = arrWord.map (el => MORSE_CODE[el])
  return deArrWord.join(' ').replace(/([A-Z])\s/g, '$1').trim().replace(/\s{2}/g, ' ').replace(/\s{2}/g, ' ')
  
  // Your code here
  // You can use MORSE_CODE[morse]
}



console.log(decodeMorse('H E Y   J U D E'))
