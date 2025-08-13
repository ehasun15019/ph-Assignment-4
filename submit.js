function totalFine(fare) {
  if (typeof fare !== "number" || fare <= 0) {
    return "Invalid";
  }

  let fine = fare + (fare * 20) / 100 + 30;
  return fine;
}

function onlyCharacter(str) {
  if (typeof str !== "string") {
    return "Invalid";
  }

  return str.replace(/\s+/g, "").toUpperCase();
}

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

function isSame(arr1, arr2) {
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
    return "Invalid";
  }

  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }

  return true;
}

function resultReport(marks) {
  if (!Array.isArray(marks)) {
    return "Invalid";
  }

  if (marks.length === 0) {
    return { finalScore: 0, pass: 0, fail: 0 };
  }

  let total = 0;
  let pass = 0;
  let fail = 0;

  for (let i = 0; i < marks.length; i++) {
    let mark = marks[i];
    total += mark;

    if (mark >= 40) {
      pass++;
    } else {
      fail++;
    }
  }

  let average = Math.round(total / marks.length);

  return {
    finalScore: average,
    pass: pass,
    fail: fail,
  };
}
