function balance(left,right){
  const rLeft = left.replace(/[!]/g, '2').replace(/[?]/g, '3').split('').reduce((ac, el) => ac+ +el, 0)
  const rRight = right.replace(/[!]/g, 2).replace(/[?]/g, 3).split('').reduce((ac, el) => ac+ +el, 0)
  
  return rLeft === rRight ? "Balance" :  rLeft > rRight ? "Left" : "Right"
}

console.log(balance("??","!!"))

