function indexOf(head, value) {
  let current = head
  let count = 0

  while (current !== null) {
    if (current.data === value) {
      return count
    }

    current = current.next
    count++
  }

  return -1
}
