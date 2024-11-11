class Song {
  constructor(title, artist) {
    this.title = title
    this.artist = artist
    this.listeners = []
  }

  howMany(newListeners) {
    let count = 0

    newListeners.forEach((listener) => {
      const lowerCaseListener = listener.toLowerCase()
      if (!this.listeners.includes(lowerCaseListener)) {
        this.listeners.push(lowerCaseListener)
        count++
      }
    })

    return count
  }
}

const mountMoose = new Song('Mount Moose', 'The Snazzy Moose')

console.log(mountMoose.howMany(['John', 'Fred', 'BOb', 'carl', 'RyAn'])) // 5
console.log(mountMoose.howMany(['JoHn', 'Luke', 'AmAndA'])) // 2
console.log(mountMoose.howMany(['John', 'joHN', 'carl'])) // 2
