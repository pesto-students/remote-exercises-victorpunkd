function minima(k, unsortedArray) {
  return unsortedArray.sort((a, b) => a - b).splice(0, k);
}

export { minima };
