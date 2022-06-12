function callculatingToAccountingString(number) {
  if (number != null) {
    if (number < 0) {
      return `${Math.abs(number)}`;
    } else {
      return number.toString();
    }
  }
  return false;
}

console.log(callculatingToAccountingString(9));
console.log(callculatingToAccountingString(undefined));
console.log(callculatingToAccountingString(null));
