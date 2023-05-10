//Task 1
let furniture = {
    sofa: 1,
    table: 1,
    chair: 1
  };
  
  delete furniture.table;
  console.log(furniture);

  delete furniture.chair; 
  console.log(furniture)

//Task 2
let company = {
  secretary: 1,
  boss: 1,
  manager: 5,
};

if ("boss" in company) {
  console.log(true);
} else {
  console.log(false);
}


//Task 3
const student = {
    name: "John",
    age: 19,
    isHappy: true,
  };
  for (const key in student) {
    console.log(key);
    console.log(student[key]);
  }

 //Task 4
  const colors = {
    "ru pum pu ru rum": {
      red: "красный",
      green: "зеленый",
      blue: "синий",
    },
  };

  console.log(colors["ru pum pu ru rum"].red, colors["ru pum pu ru rum"].blue);

//Task 5
let salaries = {
    andrey: 500,
    sveta: 413,
    anton: 987,
    andrey: 664,
    alexandra: 199
}
function sumSalaries(oSalaries) {
    let oSumm = 0;
    let numberOfworkers = Object.keys(salaries).length;
    for (const key in oSalaries) {
      oSumm += oSalaries[key] / numberOfworkers;
    }
    return oSumm.toFixed(2);
  }
  
  console.log(`Average salary: ${sumSalaries(salaries)}`);

//Advanced Level
//Task 1
let finalScore = "4:8";
let finalScoreSeparated = finalScore.split(":");

let scoreResults = {
  0: "zero",
  1: "one",
  2: "two",
  3: "three",
  4: "four",
  5: "five",
  6: "six",
  7: "seven",
  8: "eight",
  9: "nine",
};

if (finalScoreSeparated[0] > 9 && finalScoreSeparated[1] > 9) {
    console.log("Error ");
  } else {
    console.log(
      "Results: " +
        scoreResults[finalScoreSeparated[0]] +
        " - " +
        scoreResults[finalScoreSeparated[1]]
    );
  }

//Task 2
let student1 = {
    name: "Polina",
    age: 27,
  };
  
  let student2 = {
    name: "Polina",
    age: 27,
  };
  
  function compareStudents(Ostudent1, Ostudent2) {
    let final = {};
    for (const key in Ostudent1) {
      if (Ostudent1[key] === Ostudent2[key]) {
        final[key] = Ostudent1[key];
      }
      if (!Object.keys(final).length) {
        return "Объекты не совпадают!";
      }
    }
    return final;
  }
  
  console.log(compareStudents(student1, student2));  