function toCalculating(n) {
  if (n < 0) {
    return Math.abs(n);
  } else {
    return n.toString();
  }
}
console.log(typeof(toCalculating("-4")));
console.log(toCalculating(9));
console.log(toCalculating(undefined));

