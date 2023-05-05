//Task 1
let x = 20
let y = 58
let z = 42
let sum = x + y + z
console.log(sum)

//Task 2
let second = 1;
let minute = 60 * second;
let hour = 60 * minute;
let day = 24 * hour;
let year = 365 * day;
let myAge = 30;
let myAgeInSeconds = myAge * year;
console.log(myAgeInSeconds)

//Task 3
let count = 42
let userName = '42'
console.log(count + userName);
console.log(countString = String(count));
console.log(typeof countString);
console.log(userNameNumber = Number(userName));
console.log(typeof userNameNumber);

//Task 4
let a = 1
let b = 2
let c = "белых медведей"
console.log((aS = String(a)) + (bS = String(b)) + ' ' + c);

//Task 5 
let d = 'доступ', 
    e = 'морпех',
    f = 'наледь',
    g = 'попрек',
    h = 'рубило'
let lengthWords = d.length + e.length + f.length + g.length + h.length;
console.log(lengthWords);

//Task 6
let i = 1
let j = 'one'
let k = true
console.log('Variable: ' + "i" + ' have type: ' + typeof i); 
console.log('Variable: ' + "j" + ' have type: ' + typeof j);
console.log('Variable: ' + "k" + ' have type: ' + typeof k);

//Task 7
let positive = 'true'
let negative = false
let quantity = 17
let question    
let zero = null
console.log(typeof positive);
console.log(typeof negative);
console.log(typeof quantity);
console.log(typeof question);
console.log(typeof zero);

//Task 8
let height = 15;
let width = 20;
(height > width) ? console.log(height) :
(width > height) ? console.log(width) :
console.log('height is equal to width'); 

//Task 9
let firstNumber = 1;
while (firstNumber <=20) {
    if (firstNumber % 3 == 0) {
        console.log(firstNumber);
    } 
    firstNumber++
}

//Task 10
let key = true;
let documents = true;
let pen = true;
let apple = false;
let orange = true;
let shouldGoToWork;
(key && documents && pen && apple || orange) ? (shouldGoToWork = true) :
(shouldGoToWork = false) ;

console.log(shouldGoToWork);

//Task 11
let newNumber = 10;  

if (newNumber % 5 == 0 && newNumber % 3 == 0) {
  console.log("FizBaz");
} else if (newNumber % 3 == 0) {
  console.log("Buz");
} else if (newNumber % 5 == 0) {
  console.log("Fiz");
} else {
  console.log("Check your number");
}

//Task 12
let yourAge = 54;

yourAge > 18 ? console.log("Попей пивка") : 
yourAge > 16 && yourAge < 18 ? console.log("Можешь выкурить сигаретку, только маме не говори.") : 
yourAge < 18 ? console.log("Пей колу") :
    console.log("Ошибка");

//Task 13 
let getDirection = "запад";

switch (getDirection) {
  case "север":
    console.log("на север пойдешь много денег найдешь");
    break;
  case "запад":
    console.log("на запад пойдешь верного друга найдешь");
    break;
  case "восток":
    console.log("на восток пойдешь разработчиком станешь");
    break;
  case "юг":
    console.log("на юг пойдешь счастье найдешь");
    break;
  default:
    console.log("Your data is wrong, pleasem try again");
}

//ADVANCED LEVEl
//Task 2
let first = 515;
let addNumber = 200;
let subtractNumber = 79;
let multiplicationNumber = 4;
let divisionNumber = 2;

console.log(
  `(((${first} + ${addNumber} - ${subtractNumber})* ${multiplicationNumber})/ ${divisionNumber} )= ${
    ((first + addNumber - subtractNumber) * multiplicationNumber) / divisionNumber
  }`
);

//Task 3
for (let z = 0; z < 6; z++) {
    let hashtag = "#";
    for (let w = 0; w < z; w++) {
      hashtag += "#";
    }
    console.log(hashtag);
  }
