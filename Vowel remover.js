function shortcut (string) {
  return string.replace(/[aeiou]/g, '');
}

console.log(shortcut('how are you today?'))