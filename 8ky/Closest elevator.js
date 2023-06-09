function elevator(left, right, call){
  
  if (right == left) {
    return 'right'
  }
    else if (Math.abs(right - call) > Math.abs(left - call)) {
    return 'left'
  }
    return 'right'
}