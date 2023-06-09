function firstNonConsecutive(arr) {
  const nonConsecutive = arr.find((item, index) => {
    return index > 0 && item != arr[index - 1] + 1;
  });

  if (nonConsecutive === undefined) {
    return null;
  }

  return nonConsecutive;
}

console.log(firstNonConsecutive([1, 2, 3, 4, 6, 7, 8]))
