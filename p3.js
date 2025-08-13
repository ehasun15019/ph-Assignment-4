function bestTeam(player1, player2) {
  if (
    typeof player1 !== "object" ||
    player1 === null ||
    typeof player2 !== "object" ||
    player2 === null
  ) {
    return "Invalid";
  }

  let score_1 = player1.foul + player1.cardY + player1.cardR;
  let score_2 = player2.foul + player2.cardY + player2.cardR;

  if (score_1 < score_2) {
    return player1.name;
  } else if (score_2 < score_1) {
    return player2.name;
  } else {
    return "Tie";
  }
}

console.log(
  bestTeam(
    { name: "Brazil", foul: 5, cardY: 1, cardR: 0 },
    { name: "Argentina", foul: 7, cardY: 0, cardR: 0 }
  )
);
