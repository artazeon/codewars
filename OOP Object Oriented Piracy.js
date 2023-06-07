function Ship(draft, crew) {
  this.draft = draft
  this.crew = crew

  this.isWorthIt = function () {
    const totalWeight = this.draft - this.crew * 1.5
    return totalWeight > 20
  }
}
