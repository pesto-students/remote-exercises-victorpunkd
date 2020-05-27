const animalSort = (animals) => {
  return animals.sort(function (a, b) {
    return a.numberOfLegs - b.numberOfLegs;
  });
};

export { animalSort };
