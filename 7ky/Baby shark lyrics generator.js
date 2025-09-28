const babySharkLyrics = () =>
  ['Baby', 'Mommy', 'Daddy', 'Grandma', 'Grandpa']
    .map((e) => `${e} shark,${' doo'.repeat(6)}\n`.repeat(3) + `${e} shark!\n`)
    .join('') +
  (`Let's go hunt,${' doo'.repeat(6)}\n`.repeat(3) +
    `Let's go hunt!\nRun away,…`)

console.log(babySharkLyrics())
