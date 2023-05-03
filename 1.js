"use strict";

function flattenAndSort(array) {
  const arrN = array.map((i)=> i.split(','))
  const srt = arrN.join(',')
  return srt;
}

console.log([[3, 2, 1], [7, 9, 8], [6, 4, 5]])