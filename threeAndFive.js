const threeAndFive = (n) => {
  //   if (n === 1000) return n;
  let total = 0;

  for (let i = 1; i < n; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      total += i;
    }
  }
  return total;
};

console.log(threeAndFive(1000));
