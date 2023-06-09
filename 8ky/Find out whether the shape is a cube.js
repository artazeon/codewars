var cubeChecker = function(volume, side){
  return side > 0 && Math.pow(side, 3) === volume
};