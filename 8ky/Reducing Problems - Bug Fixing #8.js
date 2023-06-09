function calculateTotal(team1, team2) {
  const t1s = team1.reduce((t, c) => t + c, 0);
  const t2s = team2.reduce((t, c) => t + c, 0);
  return t1s > t2s;
}