function capitalizeWord(word) {
  const upWord = word[0].toUpperCase() + word.slice(1);
  return upWord;
}

console.log( capitalizeWord('word') )