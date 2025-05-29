function sumAll(...numbers) {
  if (numbers.length === 0) return 0;

  const [first, ...rest] = numbers;
  return first + sumAll(...rest);
}

console.log(sumAll(1, 2, 3, 4, 5));
