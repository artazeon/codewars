const whosOnline = (friends) => {
  const namesStatus = friends.reduce((acc, el) => {
    if (el.status === 'online' && el.lastActivity <= 10) {
      acc.online = acc.online || []
      acc.online.push(el.username)
    }
    if (el.status === 'offline') {
      acc.offline = acc.offline || []
      acc.offline.push(el.username)
    }
    if (el.status === 'online' && el.lastActivity > 10) {
      acc.away = acc.away || []
      acc.away.push(el.username)
    }

    return acc
  }, {})

  return namesStatus
}

console.log(
  whosOnline([
    {
      username: 'David',
      status: 'online',
      lastActivity: 10,
    },
    {
      username: 'Lucy',
      status: 'offline',
      lastActivity: 22,
    },
    {
      username: 'Bob',
      status: 'online',
      lastActivity: 104,
    },
  ])
)
console.log(
  whosOnline([
    {
      username: 'Lucy',
      status: 'offline',
      lastActivity: 22,
    },
    {
      username: 'Bob',
      status: 'online',
      lastActivity: 104,
    },
  ])
)
