function solution(digits) {

  let maxSequence = 0;

  for (let i = 0; i < digits.length; i++) {
    const slice = digits.slice(i, i + 5);
    const numericSequence = +slice;
    
    if (numericSequence > maxSequence) {
      maxSequence = numericSequence;
    }
  }

  return maxSequence;
}
console.log(solution('1234567898765'))
