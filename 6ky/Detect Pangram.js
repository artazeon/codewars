function isPangram(string) {
  const alp = {
    A: false,
    B: false,
    C: false,
    D: false,
    E: false,
    F: false,
    G: false,
    H: false,
    I: false,
    J: false,
    K: false,
    L: false,
    M: false,
    N: false,
    O: false,
    P: false,
    Q: false,
    R: false,
    S: false,
    T: false,
    U: false,
    V: false,
    W: false,
    X: false,
    Y: false,
    Z: false,
  };

  const arr = string.toUpperCase().split('');

  for (let i = 0; i < arr.length; i++) {
    const letter = arr[i];
    if (alp.hasOwnProperty(letter)) {
      alp[letter] = true;
    }
  }

  for (let prop in alp) {
    if (!alp[prop]) {
      return false;
    }
  }

  return true;
}

console.log(isPangram('The quick brown fox jumps over the lazy dog.'))
console.log(isPangram('This is not a pangram.'))
