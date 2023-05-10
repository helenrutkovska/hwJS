//Task 1
const fibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987,];
fibonacci.forEach((item) => console.log(item));

//Task 2
const users = ["Darya", "Masha", "Denis", "Vitaliy", "Polina", "Anton"];
let usersArray = users.map((item, index) => "member " + index + ": " + item);
console.log(usersArray);

//Task 3
const numbers = [7, -4, 32, -90, 54, 32, -21];
let numbersWithFilter = numbers.filter((item) => item > 0);
let numbersWithFilterPlus = numbers.filter(function numbersFoo(item) {
  return item > 0;
});
console.log(numbersWithFilterPlus);

//Task 4
const fibonacci1 = [
    0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987,
  ];
  let fibonacciArrow = fibonacci1.reduce((sum, item) => sum + item);
  let fibonacciDec = fibonacci1.reduce(function foo(sum, item) {
    return sum + item;
  });
  console.log(fibonacciArrow);
  console.log(fibonacciDec);

//Task 5
const numbersNew = [5, 9, 13, 24, 54, 10, 13, 99, 1, 5];
let numbersFind = numbersNew.find((item) => item % 2 === 0);
let numbersFindAdd = numbersNew.find(function foo(item) {
  return item % 2 === 0;
});
console.log(numbersFind);
console.log(numbersFindAdd);

//Task 6
const array = [1, 2, 3, 4, 5, 6, 7, 88, 120];
const even = (element) => element % 2 === 0;
console.log(array.some(even));

//Task 7
const saladIngredients = new Map();
saladIngredients.set('Огурцы', 300);
saladIngredients.set('Помидоры', 200);
saladIngredients.set('Соль', 10);
saladIngredients.set('Сметана', 110);

for (let [key, value] of saladIngredients) {
  if (value > 100) {
    console.log(`${key} - ${value}`);
  }
}

//Task 8
const numbersTask8 = [1, 6, 3, 2, 7, 325, 234, 54, 586, 23, 24, 64, 56, 3, 5, 7, 8, 1, 6, 8, 9, 4, 5, 61, 2, 4, 5, 6, 3, 5];
const uniqueNumbers = [...new Set(numbersTask8)];
console.log(uniqueNumbers);


//Task 9
const arrTask9 = [1, 2, 3, 4, 5, 6, 3, 8, 12];
let elem2, elem3;

if (arrTask9.length > 1) {
  elem2 = arrTask9[1];
} else {
  elem2 = 'bbb';
}

if (arrTask9.length > 2) {
  elem3 = arrTask9[2];
} else {
  elem3 = 'eee';
}

console.log(elem2); 
console.log(elem3); 


//Task 10
const obj = {firstname: 'Петр', 'surname': 'Петров', 'age': '20 лет'};
const {firstname = 'Аноним', surname = 'Анонимович', age = '? лет'} = obj;

console.log(firstname); 
console.log(surname); 
console.log(age); 