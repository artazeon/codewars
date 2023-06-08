function validateHello(greetings) {
  const regex = /\b(hello|ciao|salut|hallo|hola|ahoj|czesc)\b/i;
  return regex.test(greetings);
}


console.log( unusualFive() )