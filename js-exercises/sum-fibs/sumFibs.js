function sumFibs(range) {
  let sum = 0,
    i = 2,
    previousNumber = 1,
    temp;
  while (i <= range) {
    if (i % 2 !== 0) sum = sum + i;
    temp = i;
    i = i + previousNumber;
    previousNumber = temp;
  }
  return sum + 2;
}

export { sumFibs };
