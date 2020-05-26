function sumPrimes(range) {
  let sum = 0,
    flag;
  for (let i = 3; i <= range; i = i + 2) {
    flag = 0;
    for (let j = 2; j <= Math.sqrt(i); j++) {
      if (i % j === 0) {
        flag = 1;
        break;
      }
    }
    if (flag !== 1) {
      sum = sum + i;
    }
  }
  return sum + 2;
}

export { sumPrimes };
