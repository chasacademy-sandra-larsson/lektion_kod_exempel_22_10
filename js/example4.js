// Multiplicera alla tal i en array med 2

const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = [];

for (let i = 0; i < numbers.length; i++) {
  doubledNumbers.push(numbers[i] * 2);
}

console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]