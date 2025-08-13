function onlyCharacter(str) {
  if (typeof str !== "string") {
    return "Invalid";
  }

  return str.replace(/\s+/g, "").toUpperCase();
}

console.log(onlyCharacter("Serv er : : Do wn"));
