//Task 1
const colors = ["red", "green", "blue"];
console.log(`Array length is ${colors.length}`);

//Task 2
const animals = ["monkey", "dog", "cat"];
console.log(animals[animals.length - 1]);

//Task 3
const numbers = [5, 43, 63, 23, 90];
while (numbers.length > 0) {
  numbers.pop();
}
console.log(numbers);
numbers.length = 0;
console.log(numbers);

//Task 4
const students = ["Polina", "Dasha", "Masha"];

students.pop();
students.push("Borya");
console.log(students);

students.shift();
students.unshift("Andrey");
console.log(students);

//Task 5
const cats = ["Gachito", "Tom", "Batman"];

for (let i = 0; i < cats.length; i++) {
  console.log(cats[i]);
}
for (const iterator of cats) {
  console.log(iterator);
}

//Task 6
const evenNumbers = [2, 4, 6, 8, 10];
const oddNumbers = [1, 3, 5, 7, 9];
let numbersTogether = evenNumbers.concat(oddNumbers);
const index = numbersTogether.indexOf(8);
console.log(numbersTogether);
console.log(index);

//Task 7
const binary = [0, 0, 0, 0];
let binaryString = binary.join("1");
console.log(binaryString);