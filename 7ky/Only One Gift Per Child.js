const arr = [];
function handOutGift(name) {
  if (arr.includes(name)) {
    throw new Error("This name is already in the array");
  } else {
    arr.push(name);
  }

  return arr;
}

console.log(handOutGift("John"));
console.log(handOutGift("Jane"));
console.log(handOutGift("Jane"));
