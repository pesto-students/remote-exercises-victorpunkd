function duplicateLetters(args) {
  const sortedCharArray = [...args].sort();
  let currrentCharacter = sortedCharArray[0];
  let currrentCharacterCount = 0;
  let maxCount = 0;
  for (let i = 0; i < sortedCharArray.length; i += 1) {
    if (currrentCharacter !== sortedCharArray[i]) {
      currrentCharacter = sortedCharArray[i];
      if (currrentCharacterCount > maxCount) maxCount = currrentCharacterCount;
      currrentCharacterCount = 0;
    }
    if (currrentCharacter === sortedCharArray[i]) {
      currrentCharacterCount = currrentCharacterCount + 1;
    }
  }
  if (maxCount === 1) {
    return false;
  } else if (maxCount < currrentCharacterCount) {
    return currrentCharacterCount;
  }
  return maxCount;
}

export { duplicateLetters };
