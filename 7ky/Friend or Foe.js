function friend(friends) {
  const realFriends = friends.filter((el) => {
    return el.length === 4
  })
  
  return realFriends
}

console.log(friend(['Ryan', 'Kieran', 'Mark']))
