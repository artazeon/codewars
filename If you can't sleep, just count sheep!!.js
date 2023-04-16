const countSheep = num => {
  let val = '';
  for (let i = 1; i <= num; i++) {
    val += `${i} sheep...`;
  }
  return val;
}