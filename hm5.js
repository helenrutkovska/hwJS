//Task 1

let number = 87;

function getSumS(nSum) {
  let sum = 0;
  for (let i = 0; i <= nSum; i++) {
    sum += i;
  }
  return sum;
}
console.log(getSumS(number));
  
//Task 2
const YEARS = 5;
const RATE = 17;

function getLoan(cash) {
  let sum = cash * (RATE / 100) * YEARS + cash;
  return sum;
}

getLoan(10000);
console.log(getLoan(10000));


//Task 3
let string = "The job had gone well and the pay had been excellent";
let trimStringFrom = 4;
let trimStringTo = 16;

function trimString(stringT, trimFrom, trimTo) {
  let resultString = "";
  resultString = stringT.substring(trimFrom, trimTo);
  return resultString;
}
console.log(trimString(string, trimStringFrom, trimStringTo));

//Task 4
let numberToSum = 1234;

function getSumOfNumbers(getSum) {
  getSumResult = 0;
  for (let i = 0; i < getSum.length; i++) {
    getSumResult += Number(getSum[i]);
  }
  return getSumResult;
}

console.log(getSumOfNumbers(numberToSum));

//Task 5
let getSumNumber1 = 113;
let getSumNumber2 = 738;

function getSumNumberNew(firstNumber, lastNumber) {
  let firstN = firstNumber < lastNumber ? firstNumber : lastNumber;
  let finalN = firstNumber < lastNumber ? lastNumber : firstNumber;
  let resultN = 0;
  if (firstN !== finalN) {
    for (let i = firstN; i <= finalN; i++) {
      resultN += i;
    }
  } else {
    resultN = firstN;
  }
  return resultN;
}
console.log(getSumNumberNew(getSumNumber1, getSumNumber2));

//Task 6
function boo() {
    console.log("Boo");
  }
  function foo() {
    console.log("Foo");
  }
  
  function fooBoo(boolValue, booValue, fooValue) {
    if (boolValue) {
      fooValue();
    } else {
      booValue();
    }
  }
  fooBoo(false, boo, foo);