let add = (a, b) => {
  return a + b;
}

let sub = (a, b) => {
  return a - b;
}

let mult = (a, b) => {
  return a * b;
}

let div = (a, b) => {
  return a / b;
}

let printline = (a, b, c) => {
  return `Your input was: "${a}", "${b}"\n Your result is: ${c}`;
}

module.exports = {
  add,
  sub,
  mult,
  div,
  printline
};
