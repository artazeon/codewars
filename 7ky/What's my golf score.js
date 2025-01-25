const golfScoreCalculator = (parList, scoreList) =>
  scoreList.split('').reduce((acc, el, ind) => acc + (el - parList[ind]), 0)

console.log(golfScoreCalculator('443454444344544443', '353445334534445344'))
console.log(golfScoreCalculator('44', '35'))
