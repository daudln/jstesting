// FizzBuz

export const fizzBuzz = (n: number) => {
  if (n % 3 === 0 && n % 5 === 0) return "FizzBuzz";
  if (n % 3 === 0) return "Fizz";
  if (n % 5 === 0) return "Buzz";
  return n.toString();
};

export const calculateAverage = (arr: number[]) => {
  if (arr.length === 0) return 0;
  return arr.reduce((a, b) => a + b, 0) / arr.length;
};

export const max = (arr: number[]) => {
  if (arr.length === 0) return NaN;
  return Math.max(...arr);
};

export const factorial = (n: number): number => {
  if (n < 0) return NaN;
  if (n === 0 || n === 1) return 1;
  return n * factorial(n - 1);
};
