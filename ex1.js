const multiply = (a, b) => {
  return a * b;
};

const isEven = (num) => {
  return num % 2 == 0;
};

const getFullName = (firstname, lastname) => {
  return firstname + " " + lastname;
};

const moreThanTen = (numbers) => {
  return numbers.filter((num) => num > 10);
};

const nameAge = (names, ages) => {
  return names + " is " + ages + " years old.";
};

//// 1. Convert these to arrow functions

// 2. Write an arrow function that takes an array of numbers
// and returns only the numbers greater than 10

// 3. Write an arrow function that takes a name and age
// and returns a sentence like "Tanmay is 22 years old"
