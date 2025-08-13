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
