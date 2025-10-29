function add(num1, num2) {
  const str1 = num1.toString();
  const str2 = num2.toString();
  const maxLen = Math.max(str1.length, str2.length);
  let result = '';

  for (let i = 0; i < maxLen; i++) {
    const digit1 = +str1[str1.length - 1 - i] || 0;
    const digit2 = +str2[str2.length - 1 - i] || 0;
    result = (digit1 + digit2) + result;
  }

  return result;
}

console.log(add(1236, 30977))

// test