function lastIndexOf(elementToFind, list) {
  return list.length - list.reverse().indexOf(elementToFind) > list.length
    ? -1
    : list.length - list.reverse().indexOf(elementToFind) === list.length
    ? list.length - 1
    : list.length - list.reverse().indexOf(elementToFind) - 1;
}

export { lastIndexOf };
