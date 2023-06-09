function Hero (name) {
  // add default values here
  this.name = name || 'Hero',
  this.position = '00',
  this.health = 100,
  this.damage = 5,
  this.experience = 0
}