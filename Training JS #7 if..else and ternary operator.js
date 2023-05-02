function saleHotdogs(n){
  return n < 5 ? 100*n : n >= 5 && n < 10 ? n * 95 : n * 90
}