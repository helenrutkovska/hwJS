//Task 1
let firstName = 'Tom';
let lastName = 'Thomson';

for (let i = 1; i <= 5; i++) {
  if (i % 5 === 1) {
    console.log(`Привет ${firstName.toUpperCase()} ${lastName.toUpperCase()}`);
  } else if (i % 5 === 2) {
    console.log(`привет ${firstName.toLowerCase()} ${lastName.toLowerCase()}`);
  } else if (i % 5 === 3) {
    console.log(`ПРИВЕТ ${firstName.toUpperCase()} ${lastName.toLowerCase()}`);
  } else if (i % 5 === 4) {
    console.log(`Привет ${firstName.toLowerCase()} ${lastName.toUpperCase()}`);
  } else {
    console.log(`пРиВеТ ${firstName} ${lastName}`);
  }
}

//Task 2
const phrase = 'я учу typescript!';
const index = phrase.indexOf('учу');

if (index !== -1) {
  console.log(`Подстрока "учу" найдена на позиции ${index}`);
} else {
  console.log('Данной подстроки нет');
}

//Task 3
function getCharAtIndex(sentence, index) {
    if (index >= sentence.length) {
      console.log('Вы вышли за границу строки');
    } else {
      console.log(sentence.charAt(index));
    }
  }

let sentence = 'The job had gone well and the pay had been excellent';
getCharAtIndex(sentence, 8); 
getCharAtIndex(sentence, 57);


//Task 4
const sentenceTask4 = 'The job had gone well and the pay had been excellent';

if (sentenceTask4.endsWith(".")) {
  console.log("Данное предложение закончено.");
} else {
  console.log("В конце предложения не хватает точки.");
}


//Task 8
let num = 8.829734872948;
let result = num.toFixed(3);
console.log(result); 


//Task 11
let str = 'String input';
let reversed = str.split('').reverse().join('');
console.log(reversed);


//Task 13
const sentenceTask13 = 'The job had gone well and the pay had been excellent';
const words = sentenceTask13.split(/\W+/);
let shortestWord = words[1];

for (let i = 2; i < words.length; i++) {
  if (words[i].length < shortestWord.length) {
    shortestWord = words[i];
  }
}
//если несколько слов имеют одинаковую длинну, то выводится самое первое
console.log(`Самое короткое слово: ${shortestWord}, его длина: ${shortestWord.length}`);


//Task 16
const currentDate = new Date();
const day = currentDate.getDate().toString().padStart(2, '0');
const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
const year = currentDate.getFullYear();
const hours = currentDate.getHours().toString().padStart(2, '0');
const minutes = currentDate.getMinutes().toString().padStart(2, '0');
const seconds = currentDate.getSeconds().toString().padStart(2, '0');

console.log(`Текущая дата: ${month}/${year}/${day}. Текущее время ${hours}:${minutes}:${seconds}.`);