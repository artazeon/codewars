function zombieShootout(zombies, range, ammo) {
  let killedZombies = 0

  while (zombies > 0 && range > 0 && ammo > 0) {
    zombies--
    range -= 0.5
    ammo--
    killedZombies++
  }

  if (zombies === 0) {
    return `You shot all ${killedZombies} zombies.`
  }

  if (range <= 0) {
    return `You shot ${killedZombies} zombies before being eaten: overwhelmed.`
  }

  if (ammo <= 0) {
    return `You shot ${killedZombies} zombies before being eaten: ran out of ammo.`
  }
}

console.log(zombieShootout(3, 10, 10))
console.log(zombieShootout(100, 8, 200))
console.log(zombieShootout(50, 10, 8))
