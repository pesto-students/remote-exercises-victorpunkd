function sumAll(args) {
  let sum = 0,
    newArray = args[0] > args[1] ? args.reverse() : args;
  for (let i = newArray[0] + 1; i < newArray[1]; i++) {
    sum = sum + i;
  }
  return sum + newArray[0] + newArray[1];
}

console.log(sumAll([1, 4]));
export { sumAll };
