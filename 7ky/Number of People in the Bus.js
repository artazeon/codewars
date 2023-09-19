var number = function(busStops){
  let res = 0

  for (i = 0; i < busStops.length; i++){
    res = res + busStops[i][0]
    res = res - busStops[i][1]
  }

  return res
}

console.log(number([[10,0],[3,5],[5,8]]))
