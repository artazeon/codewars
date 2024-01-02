const isSantaClausable = obj => {
  return (
    typeof obj.sayHoHoHo === 'function' &&
    typeof obj.distributeGifts === 'function' &&
    typeof obj.goDownTheChimney === 'function'
  );
}

var santa = {
  sayHoHoHo: function() { console.log('Ho Ho Ho!') },
  distributeGifts: function() { console.log('Gifts for all!'); },
  goDownTheChimney: function() { console.log('*whoosh*'); }
};

var notSanta = {
  sayHoHoHo: function() { console.log('Oink Oink!') }
  // no distributeGifts() and no goDownTheChimney()
};



console.log(isSantaClausable(santa))
console.log(isSantaClausable(notSanta))

