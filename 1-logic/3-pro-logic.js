//Guard clauses

function numberToAccountingString(number) {
  //no nesting
  if (number == null) return false;
  if (number < 0) `${Math.abs(number)}`;
  return number.toString();
}

console.log(numberToAccountingString(undefined));
console.log(numberToAccountingString(44));
