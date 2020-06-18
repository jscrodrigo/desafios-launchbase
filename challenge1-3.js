const users = [{
  name: "Charles",
  techs: ["JavaScript", "ASP.NET CORE"],
  income: [100, 200, 300, 400],
  expenses: [730, 100, 150, 200]
},
{
  name: "Amanda",
  techs: ["JavaScript", "RubyOnRails"],
  income: [50, 100, 150, 200],
  expenses: [30, 55, 25, 90]
},
{
  name: "Adrian",
  techs: ["Django", "R"],
  income: [1000, 75, 820, 400],
  expenses: [900, 400, 1200, 700]
}];

/*Part 01*/ 
function workWithJS(user){
  for(let i = 0; i < users.length; i++){
    if(user.techs[0] === "JavaScript" || user.techs[1] === "JavaScript") {
     return true;
    } else {
      return false;
    }
  }
};

for(let i = 0; i < users.length; i++) {
  const usesJS = workWithJS(users[i]);
  if(usesJS){
    console.log(`${users[i].name} works with JS`);
  } else{
    console.log(`${users[i].name} doesn\'t use with JS`);
  }
}


/*Part2*/

function sumNumbers(array){
  let sum = 0;
  for(let i = 0; i < array.length; i++){
    sum += array[i];
  }
  return sum
};

function calcBalance(userIncome, userExpenses) {
  const income = sumNumbers(userIncome);
  const expenses = sumNumbers(userExpenses);
  const balance  = income - expenses;
  return balance
}

for(let i = 0; i < users.length; i++){
  let balance = calcBalance(users[i].income, users[i].expenses);
  if (balance < 1){
    console.log(`${users[i].name} has a NEGATIVE balance of U$ ${balance}`);
  } else {
    console.log(`${users[i].name} has a positive balance of U$ ${balance}`);
  }
};





