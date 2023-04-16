function contamination(text, char){
  let virus = ''
  for (let i = 1; i <= text.length; i++) {
    virus += `${char}`
  } 
  return virus
}


console.log(contamination("abc","z"))