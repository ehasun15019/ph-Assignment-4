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

console.log(resultReport([98, 87, 67, 91, 92, 33, 87]));
