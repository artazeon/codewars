function enough(cap, on, wait) {
  const place = cap - on - wait
  return place >= 0 ? 0 : Math.abs(place)
}
