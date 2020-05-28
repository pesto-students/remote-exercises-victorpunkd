function alternatingCharacters(arr) {
  let resultArray = [],
    currentArray = [],
    totalDeleteforEachString;
  arr.map((data) => {
    currentArray = [...data];
    totalDeleteforEachString = 0;
    for (let i = 1; i < currentArray.length; i++) {
      if (currentArray[i - 1] === currentArray[i]) {
        currentArray.splice(i, 1);
        totalDeleteforEachString++;
        i--;
      }
    }
    resultArray.push(totalDeleteforEachString);
  });
  return resultArray;
}

export { alternatingCharacters };
