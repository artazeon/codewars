// Sum Numbers
function sum (numbers) {
  "use strict";
  return numbers.reduce((ac, i) => {
    return ac+i
  }, 0)
  
};


console.log( sum([1, 5.2, 4, 0, -1]) )