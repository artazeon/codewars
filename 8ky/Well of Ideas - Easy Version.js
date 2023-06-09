function well(x){
  const result = x.filter(item => item === 'good');
  console.log( result )
  console.log( result.length )
  return result.length > 2 ? 'I smell a series!' : result.length > 0 ? 'Publish!' : 'Fail!'
  }


console.log( well(["bad","bad","good","bad","good","bad","bad","bad"]) )